const express = require('express')
const admin =  express()
const PORT = process.env.APORT || 4000

admin.listen(PORT,() => {
 console.log(`Admin server runnong on http://localhost:${PORT}`)
})