const path = require('path')
const {errorFilePath} = require('../utils/errors')
const validatedUrlParams = (req,res,next) => {
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

module.exports = {validatedUrlParams}