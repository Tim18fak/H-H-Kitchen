const path = require('path')
const {errorFilePath} = require('../utils/errors')
const jwt =  require('jsonwebtoken');
const { head } = require('../Routes/auth');
const { ResetToken } = require('../utils/DatabaseStruct');


const validatedUrlParams =  (req,res,next) => {
 const params = req.params.subpath;
 // console.log(params)
// an array of valid subPaths
 const validParams = ['diner','admin','chef','receptionist'];

 if(!validParams.includes(params)){
  console.log('err')
  res.status(404).json({
      error: 'URL invalid',
      message: 'No POST req of the given url',
    })
 }else{
  req.subpath =  params
 next()
 }
}

const resetPassJWT = async (req,res,next) => {
  const header =  req.headers.authorization
 
  if(!header) return res.status(403).json({err: 'invalid',errResponse: 94})
  const token =  header && header.split(' ')[1].split('=')[2]

  const existToken = async function(token){
    const existToken =await ResetToken.findOne({token})
    if(!existToken) return false
    return true
  }
  // check if token has beem used before
  const existState = await existToken(token)

  if(existState) return res.status(403).json({err: 'exist token', errResponse: 93})

  jwt.verify(token,process.env.RESETPASS,async (err) => {
    if(err){
      console.log(err.message)
      return res.status(403).json({err: 'invaild',errResponse: 95})
    }
    console.log('verified')
    
    req.id = header && header.split(' ')[1].split('=')[1]
    console.log(header.split(' ')[1].split('=')[1])
    req.token =  token
    next()
  })
}



module.exports = {validatedUrlParams,resetPassJWT}