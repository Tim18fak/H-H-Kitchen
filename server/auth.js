const express = require('express')
const path = require('path')
const auth = express()
require('dotenv').config()
const PORT = process.env.Port || 5100
const authenicate = require('./Routes/auth')
const { validatedUrlParams } = require('./middleware/authServer')
// calling the mongodb connection function
const Mongodb = require('./configs/mongodb.config')
// refactoring my code to be more DRY
const { errorFilePath } = require('./utils/errors')
auth.use(express.json())
// BUG remove the validatedRLParams to be used for
auth.use('/HV/:subpath', validatedUrlParams, authenicate)
auth.get('/he', (req, res) => {
  res.send('hello')
})

auth.get('/reset/:sub')
auth.all('*', (req, res) => {
  // res.sendFile('error.html',{root: 'public'})

  const $errorFilePath = errorFilePath()
  res.status(404).sendFile($errorFilePath)
})
auth.listen(PORT, () => {
  console.log(`auth server running on http:localhost:${PORT}`)
})

// features
// consumer get restuarant receipes
//  consumer place orders for a day or enable reoccuring orders
//
//  Authentication and Authorization Server:

// Endpoints:

// /auth/register (POST): Register a new user.
// /auth/login (POST): Authenticate and generate an access token.
// /auth/logout (POST): Log out and invalidate the current session.
// /auth/forgot-password (POST): Initiate the password reset process.
// /auth/reset-password/:token (POST): Reset the user's password.
