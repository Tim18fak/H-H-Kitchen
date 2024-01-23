const mongoose = require('mongoose')
// a direct import of a module when we just what to load it not use it based on a name value
// Set Mongoose debugging
// mongoose.set('debug', true);
const mongo_url = process.env.mongo_url;
console.log(mongo_url)
// this is a synchonous network request
const Mongodb = mongoose.connect(mongo_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
console.log('Successful database contection')
})
.catch(err => {
    console.error(`${err}`)
})
.finally(() => {
    console.log('the database logic is working')
})
module.exports = Mongodb