const express = require('express')
// const {firebase} = require('./configs/firebase.config')
// const Mongodb =  require('./configs/mongodb.config')
const app =  express()
const path = require('path')
// Routes
app.get('/HC/:subpath',(req,res) => {
    const subpath = req.params.subpath;
    res.json({'message': `Received POST request for /HV/${subpath}`});
})
app.all('*',(req,res) => {
    // res.sendFile('error.html',{root: 'public'})
    const errorFilePath = path.jresolve(__dirname, 'html/error.html')
    res.status(404).sendFile(errorFilePath)
})
app.listen(()=> {
    console.log('http://localhost')
})