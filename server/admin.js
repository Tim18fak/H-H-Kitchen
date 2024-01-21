const express = require('express')
const admin =  express()
const PORT = process.env.PORT || 4000
require('dotenv').config()
// calling the mongodb connection function
const Mongodb =  require('./configs/mongodb.config')
// refactoring my code to be more DRY
const {errorFilePath} =  require('./utils/errors')

admin.get('/HA/:subpath',(req,res) => {
 const subpath = req.params.subpath;
 res.json({'message': `Received POST request for /HV/${subpath}`});
})
admin.all('*',(req,res) => {
  //  a different way to access a file sing the res.sendFile
 // res.sendFile('error.html',{root: 'public'})
 
  const $errorFilePath = errorFilePath()
    res.status(404).sendFile($errorFilePatherrorFilePath)
})
admin.listen(PORT,() => {
 console.log(`Admin server running on http://localhost:${PORT}`)
})

// server features 
// 1. admin roles, post request to add new receipes
// 2. get receipes
// 3. get list of orders from the database
// Admin/Staff Server:

// Endpoints:

//     /admin/dashboard (GET): Display an admin dashboard with relevant statistics.
//     /admin/orders (GET): Get a list of all orders.
//     /admin/orders/:orderId (GET, PUT): Get and update details of a specific order.
//     /admin/menu (GET): Retrieve the list of all menu items.
//     /admin/menu/:itemId (GET, POST, PUT, DELETE): CRUD operations for menu items.
//     /admin/reservations (GET): Get a list of all reservations.
//     /admin/users (GET): Retrieve a list of all user accounts.
//     /admin/users/:userId (GET, PUT): Get and update details of a specific user.