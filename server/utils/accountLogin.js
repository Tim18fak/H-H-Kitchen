'use strict'

const { loginTokenCookie } = require('../security/jwt/jwt')
const { Admin, Diner, Chef, Receptionist } = require('./DatabaseStruct')

const brcypt = require('bcryptjs')

// valid user email and username
const validUserEmail = async function (Db, email, username) {
  console.log(email)
  const existAdmin = await Db.findOne({ email: email })
  console.log(existAdmin)

  if (
    !existAdmin ||
    existAdmin.activationStatus === process.env.INVALIDSTATUS ||
    existAdmin.username !== username
  ) {
    return { value: false }
  }
  return { value: true, existAdmin }
}

const validateUserPass = async function (password, data) {
  const valid = await brcypt.compare(password, data.hashpassword)
  return valid
}
const adminLogin = async (req, res) => {
  try {
    // Your code here
    if (!req.body) return res.status(403).json({ err: 'text', errResponse: 96 })

    const { username, password, email } = req.body

    const validatedEmail = await validUserEmail(Admin, email, username)

    if (!validatedEmail.value)
      return res.status(403).json({ err: 'Invalid', errResponse: 97 })

    const validatePass = await validateUserPass(
      password,
      validatedEmail.existAdmin,
    )

    if (!validatePass)
      res.status(403).json({ err: 'invalid', errResponse: '97' })
    const { aT, rT } = await loginTokenCookie(username)

    return res.cookie('token', `HH ${rT} ${''} ${aT}`, {
      maxAge: '',
    })
  } catch (error) {
    console.error(error)
  }
}

const staffLogin = () => {}

const userLogin = () => {}
module.exports = { staffLogin, userLogin, adminLogin }
