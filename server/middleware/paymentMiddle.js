const jwt =  require('jsonwebtoken')
const path =  require('path')
const {DinerModel} =  require('../utils/DatabaseStruct')

const UserData = async(req,res,next) => {
 try {
   // Your code here
   const {price,serving,time,mealName,currency}= req.body 
   const ID =  req.params.Id
   console.log(ID)
   const user  = await  DinerModel.findById(ID)
   console.log(user)
   if(!user) return res.sendStatus(404)
   const {username: dinerName,email: dinerEmail} =  user
   req.userInfo = {dinerEmail,dinerName,price,serving,time,ID,mealName,currency}
   next()
 } catch (error) {
   console.error(error);
 }
}

const authenticateUser = (req,res,next) => {
  const header =  req.headers['authorization'];
  const HHKTOKEN = header && header.split(' ')[1]
  if(!header && !HHKTOKEN){
    const errorPath =  path.join(__dirname,'../public/error.html')
    return res.sendFile(errorPath)
  }

  try {
    // Your code here
    jwt.verify(header,process.env.HHKTOKEN,(err) => {
      if(err){
        const errorPath =  path.join(__dirname,'../public/unauthorizated.html')
        return res.sendFile(errorPath)
      }
  
      next()
    })
  } catch (error) {
    console.error(error);
  }
}
const userToken = async(req,res,next) => {
  const id = req.params.Id
  const dinerUser = await DinerModel.findById(id)
  if(!dinerUser){

  }
  req.token = dinerUser.token
  next()
}
module.exports = {UserData,authenticateUser,userToken}