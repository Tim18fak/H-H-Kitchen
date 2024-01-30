const {Diner,Admin,Chef,Receptionist} = require('../../utils/DatabaseStruct')

const jwt = require('jsonwebtoken')

const emailExist  = async function(email,DB){
 const exist  =  await DB.findOne({email: email})
 console.log(exist)
 const id = exist && exist._id
 if(!exist) return {value: false}
 return {value: true, id}
}


const requestPassRecovery = async function(req,DB,res){
  const  email = req.body.email
 console.log(email)
 let path;
switch (req.subpath) {
  case 'diner':
    path = 'dReset'
    break;
  case 'admin':
    path = 'aReset'
    break;
  case 'chef':
      path = 'cReset'
    break;
  case 'receptionist':
    path = 'rReset'
    break;
  default:
    // Your code here
}
 const existState =  await emailExist(email,DB)
 console.log(existState)

 if(!existState.value) return res.status(403).json({err: 'email not exist', errResponse: '96'})
try {
  const id =  existState?.id && existState.id
  const payload = {
    id
  }
  const token = jwt.sign(payload, process.env.RESETPASS, { expiresIn: '15m' });
  //  console.log(token)

   const link =  `http://localhost:5100/HV/${req.subpath}/${path}?u=${id}&t=${token}`
  console.log(link)

} catch (error) {
  console.error(error);
}

}

const dinerRecovery = async (req,res) => {
try {
  // Your code here
  await requestPassRecovery(req,Diner,res)
} catch (error) {
  console.error(error);
}
  // http://localhost:5000/jwt/userid
}
const adminRecovery = async (req,res) => {
 try {
   // Your code here
   await requestPassRecovery(req,Admin,res)
 } catch (error) {
   console.error(error);
 }
}
const chefRecovery = async (req,res) => {
 try {
   // Your code here
   await requestPassRecovery(req,Chef,res)
 } catch (error) {
   console.error(error);
 }
}
const receptionRecovery =async (req,res) => {
 try {
   // Your code here
   await requestPassRecovery(req,Receptionist,res)
 } catch (error) {
   console.error(error);
 }
}

module.exports ={dinerRecovery,adminRecovery,chefRecovery,receptionRecovery}

//qqbwadAXnAvoq/LDXVnYwjeS1e1JbzhvqbykEQ6ybi4g1kVFYUe7KUu6VY+4RzCd8jsXps/a6o43dowUm9VUSZDN7A4bEOcIDcMl1r68Zo9bmxmS1pGXzzwmin8+NCgQEUTn9yG2o6Q2HPmflP3UuHkNLZMJa2XMWORo1HoKkV0=