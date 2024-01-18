const express = require('express')
// const {firebase} = require('./configs/firebase.config')
// const Mongodb =  require('./configs/mongodb.config')

const Dishes =  require('./Routes/Dishes')
const app =  express()

// Routes
app.use('/d',Dishes)
app.get('/HC/:subpath',(req,res) => {
    res.send('Hello world')
})

app.listen(()=> {
    console.log('http://localhost')
})