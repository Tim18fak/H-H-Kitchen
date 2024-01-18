const express = require('express')
const path =  require('path')
const auth = express()
const PORT = process.env.Port ||5000

auth.get('/HV/subpath', (req, res) => {
 const subpath = req.params.subpath;
 res.json({'message': `Received POST request for /HV/${subpath}`});
});
auth.all('*',(req,res) => {
 const errorFilePath = path.resolve(__dirname, 'html/error.html')
 res.status(404).sendFile(errorFilePath)
})
auth.listen(PORT,() => {
 console.log(`auth server running on http:localhost:${PORT}`)
})

// features
// consumer get restuarant receipes
//  consumer place orders for a day or enable reoccuring orders 
// 