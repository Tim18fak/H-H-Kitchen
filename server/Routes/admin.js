const express = require('express')
const { Chef, Receptionist, Diner } = require('../utils/DatabaseStruct')

const { subPath } = require('../middleware/adminServer')

const adminRouter = express.Router()

adminRouter.get('/dashboard')
// admin/orders (GET): Get a list of all orders.
adminRouter.get('/orders')
// /admin/reservations (GET): Get a list of all reservations.
adminRouter.get('/reservations')

// /admin/users (GET): Retrieve a list of all user accounts.
adminRouter.get('/:user', async (req, res) => {
  try {
    // Your code here
    switch (req.params.user) {
      case 'chef':
        // Your code here
        const allChefNum = await Chef.countDocuments({})
        const allChef = await Chef.find({})
        if (!allChef) return res.send('No chef account')
        res.json({ chef: allChef, num: allChefNum })
        break
      case 'receptionist':
        // Your code here
        const allReceptionistNum = await Receptionist.countDocuments({})
        const allReceptionist = await Receptionist.find({})
        res.json({ reception: allReceptionist, num: allReceptionistNum })
        break
      case 'diners':
        // Your code here
        const dinerNum = await Diner.countDocuments({})
        const dinerAcc = await Diner.find()
        res.json({ user: dinerAcc, num: dinerNum })
        break
      default:
        // Your code here
        res.send('Not found')
    }
  } catch (error) {
    console.error(error)
  }
})

// /staff/:userId Get and update details of a specific staff like grant access after user has changed his password.
adminRouter.get('/staff/:userId')

// /reservations
//  /admin/reservations (GET): Get a list of all reservations.
adminRouter.get('/reservations/:time')

adminRouter.get('/profile', (req, res) => {})


adminRouter.get('/allTransaction/:id',async(req,res) => {
  /**Get All Transactions
This endpoint returns a list of transactions carried out on your integration.
GET
{{base_url}}/api/v1/transactions/search */
})
module.exports = adminRouter

//     /admin/orders/:orderId (GET, PUT): Get and update details of a specific order.
//     /admin/menu (GET): Retrieve the list of all menu items.
//     /admin/menu/:itemId (GET, POST, PUT, DELETE): CRUD operations for menu items.
//     /admin/reservations (GET): Get a list of all reservations.
//     /admin/users (GET): Retrieve a list of all user accounts.
//     /admin/users/:userId (GET, PUT): Get and update details of a specific user.
