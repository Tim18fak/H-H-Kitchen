const express = require('express')
const app =  express()
const path = require('path')
require('dotenv').config()
// calling the mongodb connection function
const Mongodb =  require('./configs/mongodb.config')
// refactoring my code to be more DRY
const {errorFilePath} =  require('./utils/errors')

// Routes
app.get('/HC/:subpath',(req,res) => {
    const subpath = req.params.subpath;
    res.json({'message': `Received POST request for /HV/${subpath}`});
})
app.all('*',(req,res) => {
    // res.sendFile('error.html',{root: 'public'})
    const $errorFilePath = errorFilePath()
    res.status(404).sendFile($errorFilePatherrorFilePath)
})
app.listen(()=> {
    console.log(`http://localhost`)
})

// endpoints
// /menu (GET): Retrieve the list of available menu items.
// /menu/:itemId (GET): Get details of a specific menu item.
// /reservation (POST): Place a reservation for a meal pickup.
// /order (POST): Place a food order.
// /order/:orderId (GET): Get details of a specific order.
// /user/profile (GET): Retrieve user profile details.
// /user/orders (GET): Get a list of past orders for the logged-in user.