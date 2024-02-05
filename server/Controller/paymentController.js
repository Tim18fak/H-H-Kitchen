const axios = require('axios')
const nodemailer = require("nodemailer");
// server urls


const HHKitchenURl = require("../data/urls");

const { randomReferenceNum } = require("../utils/paymentUtils");

const { Diner, Order } = require("../utils/DatabaseStruct");
const { transporter, dID } = require('../utils/defaultFunc');

// generate the Basic Header token
const authenticate = (req, res) => {
  const APIKEY = process.env.APIKEY;
  const CLIENTSECRET = process.env.CLIENTSECRET;
  const credentials = `${APIKEY}:${CLIENTSECRET}`;
  const base64Credentials = Buffer.from(credentials).toString("base64");
  const authorizationHeader = `Basic ${base64Credentials}`;

  return res.status(200).json({ token: authorizationHeader });
};

// // function expression
// const paymentReference = function () {
//   const text = "";
// };

// get Bearer token
const BearerToken = async (req, res) => {
  const basicTokenUrl = HHKitchenURl.basicTokenUrl;
  const token = req.token;

  try {
    // Your code here
    const basicToken = await axios.get(basicTokenUrl);
    // seperate the basic from the generated token
    const initializeToken = basicToken.data.token.split(" ")[1];
    // add  Bearer to the initializes token
    const initializeHeaderToken = `Basic ${initializeToken}`;
    // console.log("initialized token" + initializeHeaderToken)
    const BearersToken = function () {
      const token = new Promise((resolve, reject) => {
        fetch(HHKitchenURl.monnifyBearerURL, {
          method: "POST",
          headers: {
            authorization: initializeHeaderToken,
            "Content-type": "application/json",
          },
          body: JSON.stringify({}),
        })
          .then((response) => response.json())
          .then((data) => {
            // Your code here
            resolve(data.responseBody.accessToken);
          })
          .catch((error) => {
            console.error(error);
            reject("");
          });
      });
      return token;
    };
    const bearerToken = await BearersToken();
    if (!bearerToken) {
      console.log("token generation failed");
    }
    return res.status(201).json({ token: bearerToken });
  } catch (error) {
    console.error(error);
  }
};

// initialize payment token from monnify
const InitializeDiner = async (req, res) => {
  // Fix  passing the user info has a query
  const { name, email, amount } = req.query;
  const monnifyAccessToken = await axios.get(HHKitchenURl.HHMonnfiyAccessToken);
  const monnifyBearerToken = `Bearer ${monnifyAccessToken.data["token"]}`;

  // TODO pass the user info has query parameters

  const DinerPaymentInitialization = function () {
    const DinerPaymentReference = new Promise((resolve, reject) => {
      const paymentTnitializationUrl =
        HHKitchenURl.monnifyPaymentInitializationUrl;

      fetch(paymentTnitializationUrl, {
        method: "POST",
        headers: {
          authorization: monnifyBearerToken,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          customerName: name,
          customerEmail: email,
          paymentReference: randomReferenceNum(),
          paymentDescription: "Meal transaction",
          currencyCode: "NGN",
          contractCode: process.env.MONNIFYCONTRACTCODE,
          redirectUrl: "https://my-merchants-page.com/transaction/confirm",
          paymentMethods: ["CARD", "ACCOUNT_TRANSFER"],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
          // Your code here
        })
        .catch((error) => console.error(error));
    });
    return DinerPaymentReference;
  };
  // invoking the DinerPaymentInitialization function to get the transactionReference
  const DinerRefPayment = await DinerPaymentInitialization();
  // destruct DinerRefPayment object

  const {
    responseBody: { transactionReference, paymentReference },
  } = DinerRefPayment;

  if (DinerRefPayment.requestSuccessful)
    return res.status(201).json({ transactionReference, paymentReference });
};

// fucntion express to make the order
const EmailInvite = function (...args) {
  const response =  args[0]
  const OrderHtmlTemplate = `hh`


  const SendOrder = {
    from: `"H-H-Kitchen"` + process.env.HHKitchen,
    to: args[2],
    subject: `Meal Order by ${args[1]}`,
    text: `${args[5]} Order`,
    html: OrderHtmlTemplate,
  };

  async function sendDinerInvitation (res,data,name){
    const result = await transporter.sendMail(data)

    return res.status(201).json({
      message: `${name}, Your meal order has been booked`
    })
  }
  sendDinerInvitation(response,SendOrder,args[1])
};

// store the order in the database
const Orders = async function (
  res,
  name,
  email,
  amount,
  date,
  cuisineName,
  numPlates,
  Numquest,
  id,
  others,
  paymentData,
  cusinseid
) {
  const newOrder = new Order({
    id: cusinseid,
    mealName: cuisineName,
    reservationTime: date,
    diner: id,
    numDishes: numPlates,
    numberOfDiner: Numquest,
    other: others,
    amount,
    status: "Pending",
    paymentData
  });

  await newOrder.save();
  // res.send('saved')
  EmailInvite(res, name, email, amount, date, cuisineName, numPlates, Numquest);
};

// process the payment check and play the order
const CheckOut = async (req, res) => {
  const {
    body: {
      number,
      expiryMonth,
      expiryYear,
      pin,
      cvv,
      name,
      email,
      amount,
      date,
      mealName,
      numPlates,
      Numquest,
      others,
    },
  } = req;
  // check if the order is about 2hour ahead of current time, use a function expression

  const {
    data: { token },
  } = await axios.get(HHKitchenURl.HHMonnfiyAccessToken);
  const {
    data: { transactionReference, paymentReference },
  } = await axios.get(
    `${HHKitchenURl.HHKitchenPaymentInitializer}${123}?name=${name}&email=${email}&amount=${amount}`,
  );

  const CardPayment = function () {
    const cardPaymentPromise = new Promise((resolve, rejects) => {
      fetch(HHKitchenURl.HHMonnifyCardPayment, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          transactionReference: transactionReference,
          card: {
            number,
            expiryMonth,
            expiryYear,
            pin,
            cvv,
          },
        }),
      })
        .then((res) => {
          res.json().then((data) => {
            resolve(data);
          });
        })
        .catch((err) => {
          console.log(err);
          rejects("err");
        });
    });
    return cardPaymentPromise;
  };
  const payment = await CardPayment();
  if (
    payment.responseBody.status !== "SUCCESS" &&
    payment.responseBody.message !== "Transaction Successful"
  )
    return res.status(400).json({
      message: "payment failed",
    });

  const { responseBody: paymentData } = payment;
  const id = dID();
  // diner meal booking object
  const order = {
    id,
    mealName,
    numberOfDiner: Numquest,
    reservationTime: date,
    other: others,
    status: "Pending",
    paymentReference,
    paymentData,
  };

  const diner = await Diner.findById(req.id);


  diner.reservations.push(order)
    console.log(diner, req.id);
   (await diner.save());

   await Orders(
      res,
      name,
      email,
      amount,
      date,
      mealName,
      numPlates,
      Numquest,
      req.id,
      others,
          paymentData,
          id
    );
  //   if (result.message !== "Success" || !result.status)
  //     return res.json({ message: "Booking order failed" });
};

// get diner id
const GetDinerID = async (req, res,next) => {
  const { email } = req.body;
  const diner = await Diner.findOne({ email: email });
  if (!diner) return console.log("Diner not found");
  req.id = diner._id;
  next()
};

module.exports = {
  authenticate,
  BearerToken,
  InitializeDiner,
  CheckOut,
  GetDinerID,
};
