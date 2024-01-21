const nodemailer = require('nodemailer')


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


async function sendActivationCode(res,transporter,data){
 try {
   // Your code here
  await transporter.sendMail(data)
  res.status(201).json({
   message: "You account has been created and your Activation Code was sent to your email"
  })
 } catch (error) {
   console.error(error);
 }
 }

 sendActivationCode(args[0],transporter,sendInfo)
}
module.exports = {ActivationCode,ActivationCodeEmail}