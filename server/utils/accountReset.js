const { Diner, Admin, Chef, Receptionist, ResetToken } = require("./DatabaseStruct")
const brcrypt =  require('bcryptjs')


const resetPassLogic = async function(Db,res,req){

  try {
    // Your code here
    const {old: previous, new: newPassword , reNew} =  req.body
    // check if both new password are the same
  
    if(newPassword !== reNew) return res.status(403).json({err: 'invalid', errResponse: 9})
  
    const ID =  req.id.split('&')[0]
    const exist =  await Db.findById(ID)
  
    // compare if old password is the same has the one stored in the DB
  
    const comparePrePass = await brcrypt.compare(previous,exist.password)
  
    if(!comparePrePass) return res.status(403).json({err: 'invalid', errResponse: 99})
  
    const newpassword =  await brcrypt.hash(newPassword,10)
  
    exist.password =  newpassword
    await exist.save()
    // save token when user has successful reset his password
    const token = req.token
    const newResetToken = new ResetToken({
      token
    })
    await newResetToken.save()
    return res.status(200).json({message: 'Password Reset'})
  } catch (error) {
    console.error(error);
  }
}


const dinerReset = async (req,res) => {
 await resetPassLogic(Diner,res,req)
}

const adminReset = async (req,res) => {
  await resetPassLogic(Admin,res,req)
 }

 const chefReset = async (req,res) => {
  await resetPassLogic(Chef,res,req)
 }

 
const receptionReset = async (req,res) => {
  await resetPassLogic(Receptionist,res,req)
 }
 
module.exports = {dinerReset,adminReset,chefReset,receptionReset}