const express = require('express')
const { appendFile } = require('fs')
const admin =  express()
const PORT = process.env.PORT || 4000

admin.get('/',(req,res) => {
 
})

admin.listen(PORT,() => {
 console.log(`Admin server runnong on http://localhost:${PORT}`)
})