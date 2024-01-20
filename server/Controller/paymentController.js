const axios = require('axios')
// server urls
const HHKitchenURl = require('../data/urls')
const {randomReferenceNum} =  require('../utils/paymentUtils')
// generate the Basic Header token
const authenticate = (req,res) => {
  const APIKEY = process.env.APIKEY
  const CLIENTSECRET = process.env.CLIENTSECRET
  const credentials = `${APIKEY}:${CLIENTSECRET}`;
  const base64Credentials = Buffer.from(credentials).toString('base64');
  const authorizationHeader = `Basic ${base64Credentials}`;

  return res.status(200).json({token: authorizationHeader})
}

// function expression
const paymentReference = function() {
  const text =  ''
}

// get Bearer token 
const BearerToken = async(req,res) => {
  const basicTokenUrl = HHKitchenURl.basicTokenUrl
  const token = req.token
  const basicToken =  await axios.get(basicTokenUrl)
  // seperate the basic from the generated token
  const initializeToken = basicToken.data.token.split(' ')[1]
  // add  Bearer to the initializes token
  const initializeHeaderToken = `Basic ${initializeToken}`
  // console.log("initialized token" + initializeHeaderToken)
  const BearerToken = function(){
    const token  = new Promise((resolve,reject) =>{
      fetch(HHKitchenURl.monnifyBearerURL,{
        method: "POST",
        headers: {
          'authorization': initializeHeaderToken,
          "Content-type": "application/json"
        },
        body: JSON.stringify({})
      })
    .then((response) => response.json())
    .then(data => {
      // Your code here
      resolve(data.responseBody.accessToken)
    })
    .catch(error => console.error(error));
    })
    return token
  }
  const bearerToken = await BearerToken()
  if(!bearerToken){
    console.log('token generation failed')
  }
  return res.status(201).json({token: bearerToken})
}


const InitializeDiner =  async(req,res) => {
  
  const monnifyAccessToken  =  await axios.get(HHKitchenURl.HHMonnfiyAccessToken)
  const monnifyBearerToken =  `Bearer ${monnifyAccessToken.data['token']}`
  

  const DinerPaymentInitialization = function(){

    const DinerPaymentReference = new Promise((resolve,reject) => {

      const paymentTnitializationUrl = HHKitchenURl.monnifyPaymentInitializationUrl;

      fetch(paymentTnitializationUrl,{
        method: "POST",
        headers:{
          authorization: monnifyBearerToken,
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          "amount": 100.00,
          "customerName": "Stephen Ikhane",
          "customerEmail": "stephen@ikhane.com",
          "paymentReference": randomReferenceNum(),
          "paymentDescription": "Meal transaction",
          "currencyCode": "NGN",
          "contractCode":process.env.MONNIFYCONTRACTCODE,
          "redirectUrl": "https://my-merchants-page.com/transaction/confirm",
          "paymentMethods":["CARD","ACCOUNT_TRANSFER"]
        })
      })
        .then((response) => response.json())
        .then(data => {
          console.log(data)
          // Your code here
        })
        .catch(error => console.error(error));
    })
  }
  // invoking the DinerPaymentInitialization function to get the transactionReference
  DinerPaymentInitialization()

  // console.log(monnifyBearerToken)

}

module.exports = {authenticate,BearerToken,InitializeDiner}
