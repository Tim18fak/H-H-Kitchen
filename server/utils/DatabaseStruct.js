const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const dinerSchema =  mongoose.Schema({
  ID: {type: String,required: true},
  name: {type: String,required: true},
  username: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true},
  contact: {type: String,required: true},
  address: {type: String,required: true},
  preferences: {
    // Add any specific preferences here
  },
  reservations: [{
    mealName: {type: String,required: true},
    reservationTime: Date,
    numberOfDiners: Number,
    other: {
      dessert: {type: String,required: true},
    },
  }],
  // activationCode schema Structure
  activationCode: Number,
  activationStatus: {type: String,required: true},
  activationAttempts: {type:Number,required:true}
})

const adminSchema = mongoose.Schema({
  ID: {type: String,required: true},
  name: {type: String,required: true},
  username: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true},
  roles: [String],
  contact: {type: String,required: true},
  address: {type: String,required: true},

  // activationCode schema Structure
  activationCode: Number,
  activationStatus: {type: String,required: true},
  activationAttempts: {type:Number,required:true}
})

const mealSchema = mongoose.Schema({
  name: {type: String,required: true},
  preparationTime: Number,
  calories: Number,
  available: Boolean,
})
const chefSchema =  mongoose.Schema({
  ID: {type: String,required: true},
  name: {type: String,required: true},
  username: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true},
  roles: [String],
  contact: {type: String,required: true},
  address: {type: String,required: true},
  roles: [String],
  experience: Number,
  cookingSpecialty: {type: String},
  currentTasks: [{
    id: Number,
    taskName: {type: String},
    timeRequired: Number,
    completed: Boolean,
  }],

   // activationCode schema Structure
   activationCode: Number,
   activationStatus: {type: String,required: true},
   activationAttempts: {type:Number,required:true}
})

const orderSchema = mongoose.Schema({
  mealName: {type: String,required: true},
  reservationTime: Date,
  diner: { type: Schema.Types.ObjectId, ref: 'Diner' },
  numberOfDiners: Number,
  other: {
    dessert: {type: String,required: true},
  },
  status: {type: String,required: true}, // pending, completed, etc.
})

const taskSchema = mongoose.Schema({
  taskName: {type: String,required: true},
  requiredChef: { type: Schema.Types.ObjectId, ref: 'Chef' },
  timeRequired: Number,
  completed: Boolean,
  details: {type: String,required: true}, // Additional details about the task
})

const transactionSchema =  mongoose.Schema({
  diner: { type: Schema.Types.ObjectId, ref: 'Diner' },
  mealName: {type: String,required: true},
  paymentReference: {type: String,required: true},
  transactionReference: {type: String,required: true},
  time: Date,
  transactionType: {type: String,required: true}, // Card, Cash, etc.
  amount: Number,
  paymentStatus: {type: String,required: true}, // Pending, Success, Failed, etc.
})

const inventorySchema = mongoose.Schema({
  ingredientName: {type: String,required: true},
  quantity: Number,
  unit: {type: String,required: true}, // e.g., kg, g, liters, etc.
  supplier: {type: String,required: true},
  purchaseDate: Date,
  expirationDate: Date,
  alertThreshold: Number, // Quantity at which staff receives an alert
})

const receptionistSchema = mongoose.Schema({
  ID: {type: String,required: true},
  name: {type: String,required: true},
  username: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true},
  roles: [String],
  contact: {type: String,required: true},
  address: {type: String,required: true},

   // activationCode schema Structure
   activationCode: Number,
   activationStatus: {type: String,required: true},
   activationAttempts: {type:Number,required:true}
})
const blockedUserSchema =  mongoose.Schema({
  email: {type:String,required: true},
  ip: {type: String,required: true},
  banTimeout: {type: Date,required: true}
})
const Diner = mongoose.model('Diner', dinerSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Meal = mongoose.model('Meal', mealSchema);
const Chef = mongoose.model('Chef', chefSchema);
const Order = mongoose.model('Order', orderSchema);
const Task = mongoose.model('Task', taskSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);
const Inventory = mongoose.model('Inventory', inventorySchema);
const Receptionist =  mongoose.model('Receptionist',receptionistSchema)
const Banned = mongoose.model('Banned',blockedUserSchema)
module.exports = { Diner, Admin, Meal, Chef, Order, Task, Transaction, Inventory,Receptionist,Banned };