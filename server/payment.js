const express = require('express')
const path = require('path')
require('dotenv').config()
const payment = express()
const PORT = process.env.PaymentPort || 5500
const paymentRouter = require('./Routes/payment')
// calling the mongodb connection function
const Mongodb = require('./configs/mongodb.config')

payment.use(express.json())
// refactoring my code to be more DRY
const { errorFilePath } = require('./utils/errors')
// payment.get('/HP/payment',(req,res) => {
//  res.send('payment server running')
// })
// direct all payment route

payment.use("/HP/:subpath", paymentRouter);

// payment.use('/HP/sub',(req,res) => {

//  console.log(req.params.sub)
//  res.send(process.env.APIKEY)
// })
// prevent
payment.get('/HP/:subpath', (req, res) => {
  const subpath = req.params.subpath
  res.json({ message: `Received POST request for /HV/${subpath}` })
})

payment.all('*', (req, res) => {
  const $errorFilePath = errorFilePath()
  res.status(404).sendFile($errorFilePatherrorFilePath)
})

payment.listen(PORT, () => {
  console.log(`payment server running on http://localhost:${PORT}`)
})

// Payment Gateway Server:

// Endpoints:

//     /payment/charge (POST): Process a payment for an order.
//     /payment/refund/:orderId (POST): Initiate a refund for a specific order.
//     /payment/webhooks (POST): Receive and handle payment-related webhooks for order updates.Payment Gateway Server:

// Endpoints:

//     /payment/charge (POST): Process a payment for an order.
//     /payment/refund/:orderId (POST): Initiate a refund for a specific order.
//     /payment/refund/status/:orderId  get the status of the refund process
//     /payment/webhooks (POST): Receive and handle payment-related webhooks for order updates.
