const cron =  require('node-cron')

const tempBanComplete =  (collection)=> {

  cron.schedule('', async()=>{
   const date =  new Date()
   const allUser =  await collection.find({})
   // loop over all the user object found
   for(const user of allUser){
    const tempTime =  new Date(user.banTimeOut)
     if(date.getDate() > tempTime.getDate()){
      await collection.findByIdAndDelete(user_id)

      // TODO
      // return a email notification to the admin and the user of the user been free from the ban 
      
     }
   }
  })
}

