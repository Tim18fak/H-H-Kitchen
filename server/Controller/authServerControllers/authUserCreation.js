const {
  Diner,
  Admin,
  Chef,
  Receptionist,
} = require('../../utils/DatabaseStruct')

const NewAccount = require('../../utils/acountCreation')

const dinerAccountCreation = async (req, res) => {
  const subPath = req.subpath === 'diner'
  if (!subPath)
    return res.status(401).json({
      error: 'Invalid',
      errorResponse: '99',
    })
  try {
    // Your code here
    // console.log(...body)
    NewAccount(Diner, res, req.body)
  } catch (error) {
    console.error(error)
  }
}
const adminAccountCreation = (req, res) => {
  try {
    // Your code here
    const subPath = req.subpath === 'admin'
    console.log(subPath)
    if (!subPath)
      return res.status(401).json({
        error: 'Invalid',
        errorResponse: '9',
      })
    // console.log(...body)
    NewAccount(Admin, res, req.body)
  } catch (error) {
    console.error(error)
  }
}
const chefAccountCreation = (req, res) => {
  try {
    // Your code here
    const subPath = req.subpath === 'chef'
    if (!subPath)
      return res.status(401).json({
        error: 'Invalid',
        errorResponse: '99',
      })
    // console.log(...body)
    NewAccount(Chef, res, req.body)
  } catch (error) {
    console.error(error)
  }
}
const receptionistAccountCreation = (req, res) => {
  try {
    // Your code here
    const subPath = req.subpath === 'receptionist'
    if (!subPath)
      return res.status(401).json({
        error: 'Invalid',
        errorResponse: '99',
      })
    // console.log(...body)
    NewAccount(Receptionist, res, req.body)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  dinerAccountCreation,
  adminAccountCreation,
  chefAccountCreation,
  receptionistAccountCreation,
}
