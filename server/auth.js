const express = require('express')

const auth = express()
const PORT = process.env.Port ||5000

auth.post('/HV/:subpath', (req, res) => {
 const subpath = req.params.subpath;
 res.json({'message': `Received POST request for /HV/${subpath}`});
});
auth.listen(PORT,() => {
 console.log(`auth server running on http:localhost:${PORT}`)
})