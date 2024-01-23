const {Chef,Admin,Diner,Receptionist,Banned} =require('../../utils/DatabaseStruct')
const ValidateAccount =  require('../../utils/accountVerification')
const dinerAccountActivation = async(req,res) => {
  try {
    // Your code here
    ValidateAccount(Diner,req,res,Banned)
  } catch (error) {
    console.error(error);
  }
}

const adminAccountActivation = (req,res) => {
  try {
    // Your code here
    ValidateAccount(Admin,req,res,Banned)
  } catch (error) {
    console.error(error);
  }
}
const chefAccountActivation = (req,res) => {
  try {
    // Your code here
    console.log('chef')
    ValidateAccount(Chef,req,res,Banned)
  } catch (error) {
    console.error(error);
  }
}
const receptionAccountActivation = (req,res) => {
  try {
    // Your code here
    ValidateAccount(Receptionist,req,res,Banned)
  } catch (error) {
    console.error(error);
  }
}

module.exports = {dinerAccountActivation,chefAccountActivation,adminAccountActivation,receptionAccountActivation}