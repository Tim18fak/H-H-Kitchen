const express =  require('express')
const paymentRouter =  express.Router();
const MongoDb = require('../configs/mongodb.config')
// controller
const {authenticate,BearerToken,InitializeDiner} =  require('../Controller/paymentController')
// middleware
const {UserData,authenticateUser,userToken} =  require('../middleware/paymentMiddle')


// monnify payment authentication
// middleware: authenticateUser,
paymentRouter.get('/authenticate',authenticate)
// monnify accesstoken after authentication
// middleware: userToken,authenticateUser
paymentRouter.get('/token/:Id',BearerToken)

// initialize payment and get the payment reference id

// middleware: UserData
paymentRouter.get('/initialize/:Id',InitializeDiner) 
// initialize payment refunds on particular order
paymentRouter.post('/payment/process/:Id')
paymentRouter.post('/refund/:orderId',(req,res) => {

})
// get payment refunds status on a particular order
paymentRouter.get('/refund/status/:orderId',(req,res)=> {
 res.send(process.env.APIKEY)
})
module.exports =  paymentRouter