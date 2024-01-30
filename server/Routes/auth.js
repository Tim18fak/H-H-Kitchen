const express = require('express')
const auth =  express.Router()

// user account creation
const {dinerAccountCreation,adminAccountCreation,chefAccountCreation,receptionistAccountCreation} =  require('../Controller/authServerControllers/authUserCreation')

// user account verification or code activation

const {dinerAccountActivation,chefAccountActivation,adminAccountActivation,receptionAccountActivation} =  require('../Controller/authServerControllers/authServerActivationCode')

// password recovery controller
const {dinerRecovery,adminRecovery,chefRecovery,receptionRecovery} =  require('../Controller/authServerControllers/authPasswordRecovery')

// login login controller
const { adminLogin, userLogin, staffLogin } = require('../utils/accountLogin.js')

// send the reset form to the user
const { dinerGetLink, adminGetLink, chefGetLink, receptionistGetLink } = require('../Controller/authServerControllers/accountReset')

// comfirm jwt
const { resetPassJWT } = require('../middleware/authServer')
// post request 
const { dinerReset,adminReset,chefReset,receptionReset } = require('../utils/accountReset')

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


// get request to reset password
auth.get('/dReset',dinerGetLink)
auth.get('/aReset',adminGetLink)
auth.get('/cReset',chefGetLink)
auth.get('/rReset',receptionistGetLink)

// post password reset

auth.post('/dReset',resetPassJWT,dinerReset)
auth.post('/aReset',resetPassJWT,adminReset)
auth.post('/cReset',resetPassJWT,chefReset)
auth.post('/rReset',resetPassJWT,receptionReset)

// post request for user login

auth.post('/dLogin',userLogin)
auth.post('/aLogin',adminLogin)
auth.post('cLogin',staffLogin)
auth.post('/rLogin',staffLogin)


module.exports = auth