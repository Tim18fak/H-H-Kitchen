const express = require('express')
const { appendFile } = require('fs')
const admin =  express()
const PORT = process.env.PORT || 4000

admin.get('/HA/:subpath',(req,res) => {
 const subpath = req.params.subpath;
 res.json({'message': `Received POST request for /HV/${subpath}`});
})

admin.listen(PORT,() => {
 console.log(`Admin server runnong on http://localhost:${PORT}`)
})