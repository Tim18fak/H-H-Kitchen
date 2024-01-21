const {Diner,Admin,Chef,Receptionist} =  require('../../utils/DatabaseStruct')
const brcypt =  require('bcrypt')
const { ActivationCode,ActivationCodeEmail } = require('../../utils/defaultFunc')
// account creation for various user's

const dinerAccountCreation = async(req,res) => {
  const {username,password,contact,address,email,fullname} =  req.body
  const subPath = req.subpath === 'diner'
  if(!subPath){

  }else{
    const existDinerEmail = await Diner.findOne({email: email})
    const existDinerUsername = await Diner.findOne({username: username})

    console.log(existDinerEmail,existDinerUsername)

    if(existDinerEmail && existDinerUsername){
      return res.status(422).json({
        'error': 'Account Creation Failed',
        'message': 'Existing email and username found'
      })
    }
   
    const activationCode =  ActivationCode()

    const ValidatedEmail =  function(){
      const acceptableEmailDomain = ['gmail.com','yahoo.com']
      const emailDomainService =  email.split('@')[1]
      if(!emailDomainService){
        res.status(422).json({
          message: "invalid Email"
        })
      }else{
        if(!acceptableEmailDomain.includes(emailDomainService)){
           res.status(403).json({
          message: "invalid Email Domain"
        })
        }
      }
    }


    // invoking the  ValidatedEmail() function expression to check if the email provided is valid.
     ValidatedEmail()
    const hashedPassword =  await brcypt.hash(password,10)
    const newDiner = new Diner({
      username,
      password:hashedPassword,
      email,
      contact,
      address,
      activationCode,
      activationStatus:'Pending' 
    })
    await newDiner.save()
    // logic for the for the activationCode Email
    ActivationCodeEmail(res,activationCode,email)
  }

}
const adminAccountCreation = (req,res) => {
 const subPath = req.subpath === 'admin'
  if(!subPath) console.log('admin')
}
const chefAccountCreation = (req,res) => {
 const subPath = req.subpath === 'chef'
 if(!subPath) console.log('chef') 

}
const receptionistAccountCreation = (req,res) => {
 const subPath = req.subpath === 'receptionist'
  if(!subPath) console.log('re')
}

module.exports = {dinerAccountCreation,adminAccountCreation,chefAccountCreation,receptionistAccountCreation}