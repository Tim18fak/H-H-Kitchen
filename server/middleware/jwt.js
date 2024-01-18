const jwt =  require('jsonwebtoken')
const crypto =  require('crypto')


//  jwt token creation logic
const jwtSign = (req,next) => {
 const ID = crypto.randomBytes(128).toString('hex')
 const {username} =  req.body
 const payload = {
  ID,
  username
 }
 try {
  jwt.sign(payload,process.env.Token,{
   expiresIn:  '1hr',
  },(err,token) => {
   if(err){
    console.log('authorization toke failed to be created')
   }
   req.token = {ID,token};
   next()
  })
 } catch (err) {
  console.log(`Authorization token creation failed ${err}`)
  resizeBy.status(401).json({'message': `Authorization token creation failed`})
 }
}

const jwtVerification = (req,res,next) => {
 const authToken =  req.headers.authorization
 const HH_Token = authToken && authToken.split('')[1]
 if(!HH_Token) res.status(403)
 jwt.verify(HH_Token,process.env.Token)
 .then((res) => {

  req.validate =  true
  next()
 })
 .catch(err => {
  console.log(`Token is not valid`)
  res.status(403).json({
   'message': 'You token is not valid'
  })
 })
}

module.exports = {jwtSign,jwtVerification}