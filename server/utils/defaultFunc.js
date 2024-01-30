const nodemailer = require('nodemailer')
// refactoring my code to be more DRY

const ActivationCode = () => {
  let code  = Math.trunc(Math.random() * 100000)
  if(code < 10000){
   code =  code + 10000
  }else if(code > 100000){
   code =  code - 10000
  }
  return code
}

const ActivationCodeEmail = (...args) => {

 const activationCodeHtmlTemplate = `${args[1]}`
  console.log(args)

 const transporter =  nodemailer.createTransport({
  service: process.env.NodeMailerService,
  host: process.env.NodeMailerHost,
  port: process.env.NodeMailerPort,
  secure: false,
  auth: {
    user: process.env.HHKitchen,
    pass: process.env.App_password,
  },
  // add this to prevent the PLAIN Auth error
  authMethod: 'PLAIN',
 })

 const sendInfo = {
  from: `"H-H-Kitchen"` + process.env.HHKitchen,
  to: args[2],
  subject: `Activation Code`,
  text: 'Code',
  html: activationCodeHtmlTemplate,
 }


async function sendActivationCode(res,transporter,data,id){
 try {
   // Your code here
  await transporter.sendMail(data)
  res.status(201).json({
   message: "You account has been created and your Activation Code was sent to your email",
   id
  })
 } catch (error) {
   console.error(error);
 }
 }

 sendActivationCode(args[0],transporter,sendInfo,args[3])
}

const timeBan = () => {

  const $30days = [3,5,8,10]
const $31days = [0,2,4,6,7,9,11]

const time = new Date()
const month = time.getMonth()
const year =  time.getFullYear()
month
    if($31days.includes(month)){
     if(time.getDate() <= 29){
        time.setDate(time.getDate() + 2)
     }else{
      time.setMonth(time.getMonth() + 1)
      time.setDate(time.getDate() - 30)
     }
    }
    else if($30days.includes(month)){
      if(time.getDate() <= 28){
        time.setDate(time.getDate() + 2)
     }else{
      time.setMonth(time.getMonth() + 1)
      time.setDate(time.getDate() - 28)
     }
    }else if(month === 1){
      // check for a leap year
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      if((isLeapYear)){
        if(time.getDate() <= 27){
          time.setDate(time.getDate() + 2)
        }else{
          time.setMonth(time.getMonth() + 1)
        time.setDate(time.getDate() - 27)
        }
      }else{
        if(time.getDate() <= 26){
          time.setDate(time.getDate() + 2)
        }else{
          time.setMonth(time.getMonth() + 1)
        time.setDate(time.getDate() - 26)
        }
      } 
    }
    return time
}

const resetPassEmail = () => {
  
}
module.exports = {ActivationCode,ActivationCodeEmail,timeBan}

const crypto = require('crypto');

function generateHex128() {
  const buffer = crypto.randomBytes(256); // 64 bytes because 1 byte = 2 hex characters
  return buffer.toString('hex');
}

const hex128 = generateHex128();
console.log(hex128);
