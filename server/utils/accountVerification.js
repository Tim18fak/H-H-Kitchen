const ValidateAccount = async(Diner,req,res,Banned) => {
 try {
  // Your code here
  console.log(req.body)
  const existDiner =  await Diner.findOne({ID:req.body.id})
  console.log(existDiner)
 if(!existDiner){
  return res.status(404).json({
   error: 'Id Mismatch',
   message: "doesn\'t match any in or database" 
  })
 }

 const availableAttempts =  existDiner.activationAttempts
 console.log(availableAttempts)

//  implent a temporary ban and a delay timer
  if(availableAttempts < 1){
     await Diner.findByIdAndDelete(existDiner._id)
   const{email} =  existDiner
   const Ban = new Banned({
    email,
    ip: req.ip
   })
   await Ban.save()
   return res.status(401).json({
    err: 'Banned'
   })
  }

  if(existDiner.activationCode !== req.body.code){
    await Diner.findByIdAndUpdate(existDiner._id,{activationAttempts: availableAttempts - 1})
    return res.status(401).json({
      err:'invalid',
      errResponse: '99'
    })
  }

  existDiner.activationStatus =  'Fullfilled'

  await existDiner.save()
  res.status(200).json({
    message: 'Verified'
  })

} catch (error) {
  console.error(error.message);
}
}

module.exports = ValidateAccount