const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  inProcess: {
    type: Sequelize.BOOLEAN
  },
  completed: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Order
