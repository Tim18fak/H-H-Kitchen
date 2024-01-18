const express = require('express')
const { appendFile } = require('fs')
const admin =  express()
const PORT = process.env.PORT || 4000

admin.get('/HA/:subpath',(req,res) => {
 const subpath = req.params.subpath;
 res.json({'message': `Received POST request for /HV/${subpath}`});
})
admin.all('*',(req,res) => {
 // res.sendFile('error.html',{root: 'public'})
  const errorFilePath = path.join(__dirname, 'public/error.html')
    res.status(404).sendFile(errorFilePath)
})
admin.listen(PORT,() => {
 console.log(`Admin server runnong on http://localhost:${PORT}`)
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