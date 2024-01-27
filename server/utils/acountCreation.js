const brcypt =  require('bcryptjs')
const crypto = require('crypto') 
const {ActivationCode,ActivationCodeEmail } = require('./defaultFunc');
const { Banned } = require('./DatabaseStruct');


const NewAccount =  async(collection,res,body) => {
 // Diner is the mongodb collection name,
 // res is the res header,
 // body is the data sent from the client
 const {username,password,contact,address,email,fullname} =  body;
 console.log(body)
 const ID =  crypto.randomBytes(128).toString('base64')

    // check if email has been banned already

    const  banEmail = async function(arg){
      const ban =  await Banned.findOne({email: email})
      if(ban){
        return true
      }
      return false
    }
    const isBanned =  await banEmail()
    if(isBanned){

      return res.status(403).json({
        err: 'Ban',
        errResponse: 98
      })
    }
    // valid if the user email is of valid email domain
    const ValidatedEmail =  function(){
      const acceptableEmailDomain = ['gmail.com','yahoo.com']
      const emailDomainService =  email.split('@')[1]
      if(!emailDomainService){
         res.status(422).json({
          message: "invalid Email"
        })
        return false
      }else{
        if(!acceptableEmailDomain.includes(emailDomainService)){
            res.status(403).json({
          message: "invalid Email Domain"
        })
        return false
        }else return true
      }
    }

    // invoking the  ValidatedEmail() function expression to check if the email provided is valid.
    const validatedEmail = ValidatedEmail()

    if(validatedEmail){
      const existDinerEmail = await collection.findOne({email: email})
    const existDinerUsername = await collection.findOne({username: username})

    console.log(existDinerEmail,existDinerUsername)

    if(existDinerEmail && existDinerUsername){
      return res.status(422).json({
        'error': 'Account Creation Failed',
        'message': 'Existing email and username found'
      })
    }
   
    const activationCode =  ActivationCode()

    const hashedPassword =  await brcypt.hash(password,10)
    const newUser = new collection({
      ID,
      name:fullname,
      username,
      password:hashedPassword,
      email,
      contact,
      address,
      activationCode,
      activationStatus:'Pending',
      activationAttempts: 3
    })
   try {
     // Your code here
     await newUser.save()
     // logic for the for the activationCode Email
     ActivationCodeEmail(res,activationCode,email,ID)
   } catch (error) {
     console.error(error);
   }
    }
}


module.exports =  NewAccount