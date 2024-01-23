const express = require('express')
const auth =  express.Router()

// user account creation
const {dinerAccountCreation,adminAccountCreation,chefAccountCreation,receptionistAccountCreation} =  require('../Controller/authServerControllers/authUserCreation')

// user account verification or code activation

const {dinerAccountActivation,chefAccountActivation,adminAccountActivation,receptionAccountActivation} =  require('../Controller/authServerControllers/authServerActivationCode')

// password recovery controller
const {dinerRecovery,adminRecovery,chefRecovery,receptionRecovery} =  require('../Controller/authServerControllers/authPasswordRecovery')

// post request to create new account for diner,admin,chef,reception
auth.post('/dCreate',dinerAccountCreation)
auth.post('/aCreate',adminAccountCreation)
auth.post('/cCreate',chefAccountCreation)
auth.post('/rCreate',receptionistAccountCreation)

// post request to account activation for diner,admin,chef,reception
auth.post('/dActivation',dinerAccountActivation)
auth.post('/aActivation',adminAccountActivation)
auth.post('/cActivation',chefAccountActivation)
auth.post('/rActivation',receptionAccountActivation)


// post request for password recovery
auth.post('/dRecovery',dinerRecovery)
auth.post('/aRecovery',adminRecovery)
auth.post('/cRecovery',chefRecovery)
auth.post('/rRecovery',receptionRecovery)


// post request for user login



module.exports = auth