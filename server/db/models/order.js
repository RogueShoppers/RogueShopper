const Sequelize = require('sequelize')
const db = require('../db')

// how do you associate an order to a user and to products?
const Order = db.define('order', {
  inProcess: {
    type: Sequelize.BOOLEAN
  },
  completed: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Order
