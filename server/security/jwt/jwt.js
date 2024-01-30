const jwt =  require('jsonwebtoken')
const crypto =  require('crypto')
const { Token } = require('../../utils/DatabaseStruct')

// Token Collection
// middleware

const loginTokenCookie =async (data) => {
 const id = crypto.randomBytes(256).toString('base64')
 const date = new Date().toUTCString()
 const payLoad =  {
  data,
  id,
  date
 }
 
 // error handling
 try {
   // Your code here
   const aT =  await jwt.sign(payLoad,'',{
    expiresIn: '5min'
   })
  
   const rT =  await jwt.sign(payLoad,'')
   const newRT = new Token({
    token: rT
   })
   await newRT.save()

 } catch (error) {
   console.error(error);
 }

 console.log('new rT generated')
return  {
  aT,rT
 }

}

module.exports = {loginTokenCookie}