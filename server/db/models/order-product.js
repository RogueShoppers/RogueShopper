const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('order-product', {
  orderQuantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderProduct
