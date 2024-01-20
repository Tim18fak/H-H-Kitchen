const monnifyTestURL = 'https://sandbox.monnify.com'

// noote when the final deplaoyment on vercel update the urls to the vercel based urls
const HHKitchenURl = {
 basicTokenUrl: 'http://localhost:5500/HP/payment/authenticate',
 monnifyBearerURL : `${monnifyTestURL}/api/v1/auth/login`,
 // the 1233 is just a smample id for testing
 HHMonnfiyAccessToken: 'http://localhost:5500/HP/payment/token/1233',
 
 // paymentInitialzation url
 monnifyPaymentInitializationUrl: `${monnifyTestURL}/api/v1/merchant/transactions/init-transaction`
}

module.exports =  HHKitchenURl