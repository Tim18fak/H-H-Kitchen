const express = require('express')

const auth = express()
const PORT = process.env.Port ||5000

auth.get('/',(req,res) => {
 res.json({'message': 'Auth server'})
})
auth.listen(PORT,() => {
 console.log(`auth server running on http:localhost:${PORT}`)
})