const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  userId: {},
  productId: {}
})

module.exports = Order
