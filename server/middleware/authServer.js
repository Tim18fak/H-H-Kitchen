const path = require('path')
const {errorFilePath} = require('../utils/errors')
const validatedUrlParams = (req,res,next) => {
 const params = req.params.subpath;
 // console.log(params)
// an array of valid subPaths
 const validParams = ['diner','admin','chef','receptionist'];

 if(!validParams.includes(params)){
  const $404ErrorPagePath =  errorFilePath()
  res.sendFile($404ErrorPagePath)
 }else{
  req.subpath =  params
 next()
 }
}

module.exports = {validatedUrlParams}