const express = require('express')
const path =  require('path')
const auth = express()
const PORT = process.env.Port ||5100
const authenicate =  require('./Routes/auth')

auth.use('/HV/credentials',authenicate)
auth.get('/HV/subpath', (req, res) => {
 const subpath = req.params.subpath;
 res.json({'message': `Received POST request for /HV/${subpath}`});
});
auth.all('*',(req,res) => {
 // res.sendFile('error.html',{root: 'public'})
  const errorFilePath = path.join(__dirname, 'public/error.html')
    res.status(404).sendFile(errorFilePath)
})
auth.listen(PORT,() => {
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