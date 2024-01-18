const express = require('express')
const path = require('path')
const { appendFile } = require('fs')
const admin =  express()
const PORT = process.env.PORT || 4000

admin.get('/HA/:subpath',(req,res) => {
 const subpath = req.params.subpath;
 res.json({'message': `Received POST request for /HV/${subpath}`});
})
admin.all('*',(req,res) => {
 const errorFilePath = path.resolve(__dirname, 'html/error.html')
 res.status(404).sendFile(errorFilePath)
})
admin.listen(PORT,() => {
 console.log(`Admin server runnong on http://localhost:${PORT}`)
})