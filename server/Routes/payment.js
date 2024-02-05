const express = require("express");
const paymentRouter = express.Router();
const { body, validationResult } = require("express-validator");
// const MongoDb = require('../configs/mongodb.config')
// controller
const {
  authenticate,
  BearerToken,
  InitializeDiner,
  CheckOut,
  GetDinerID,
} = require("../Controller/paymentController");
// middleware
const {
  UserData,
  authenticateUser,
  userToken,
} = require("../middleware/paymentMiddle");

// monnify payment authentication
// middleware: authenticateUser,

// create the base64 header
paymentRouter.get("/authenticate", authenticate);

// use the base64 header to get the Bearer token
// monnify accesstoken after authentication
// middleware: userToken,authenticateUser
paymentRouter.get("/token/:Id", BearerToken);

// initialize payment and get the payment reference id

// use the Bearer toke to initialize the payment

// middleware: UserData
paymentRouter.get("/initialize/:Id", InitializeDiner);

// initialize payment refunds on particular order
paymentRouter.post(
  "/checkout",
  [
    body("number").notEmpty().isString().isLength(16).escape(),
    body("expiryMonth")
      .notEmpty()
      .isString()
      .escape()
      .custom((value) => {
        if (value.length > 2) {
          throw new Error("Invalid Month");
        }
        const spreadMon = [...value];

        for (const i of spreadMon) {
          if (isNaN(parseInt(i))) {
            throw new Error("Please enter a valid month");
          }
        }

        return true;
      }),
    body("expiryYear")
      .notEmpty()
      .isString()
      .isLength(4)
      .escape()
      .custom((value) => {
        const currentYear = new Date().getFullYear();
        const spreadMonth = [...value];
        for (const num of spreadMonth) {
          if (isNaN(num)) {
            throw new Error("Please enter a valid Year");
          }
        }
        // if(parseInt(value) < currentYear) throw new Error('Your card has expired')
        return true;
      }),
    body("pin")
      .notEmpty()
      .isString()
      .isLength(4)
      .escape()
      .custom((value) => {
        const spreadMon = [...value];

        for (const i of spreadMon) {
          if (isNaN(parseInt(i))) {
            throw new Error("Please enter a valid pin");
          }
        }
        return true;
      }),
    body("cvv").notEmpty().isString().isLength(3).escape(),
    body("amount").notEmpty().isFloat().escape(),
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Invalid email address")
      .isString()
      .withMessage("Please enter a valid email format")
      .escape(),
    body("name").notEmpty().isString().escape(),
  ],
  (req, res, next) => {
    const result = validationResult(req);
    console.log(result);

    if (!result.isEmpty()) return res.status(400).json({ result });
    next();
  },
GetDinerID
,CheckOut,
);
paymentRouter.post("/payment/process/:Id");
paymentRouter.post("/refund/:orderId", (req, res) => {});
// get payment refunds status on a particular order
paymentRouter.get("/refund/status/:orderId", (req, res) => {
  res.send(process.env.APIKEY);
});

module.exports = paymentRouter;

//  fetch("url", {
//    method: "POST",
//    headers: {
//      authorization: `Bearer ${token}`,
//      "Content-type": "application/json",
//    },
//    body: JSON.stringify({
//      transactionReference: transactionReference,
//      card: {
//        number,
//        expiryMonth,
//        expiryYear,
//        pin,
//        cvv,
//      },
//    }),
//  })
