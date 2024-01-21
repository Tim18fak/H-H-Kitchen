const express = require('express')
const auth =  express.Router()
// user account creation
const {dinerAccountCreation,adminAccountCreation,chefAccountCreation,receptionistAccountCreation} =  require('../Controller/authServerControllers/authUserCreation')

// post request to create new account for diner,admin,chef,reception

auth.post('/dCreate',dinerAccountCreation)
auth.get('/aCreate',adminAccountCreation)
auth.get('/cCreate',chefAccountCreation)
auth.get('/rCreate',receptionistAccountCreation)



module.exports = auth