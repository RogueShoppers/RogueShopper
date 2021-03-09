const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('../models/product')

const Order = db.define('order', {
  completed: {
    type: Sequelize.BOOLEAN
  }
})

Order.findOpenOrder = function(userId) {
  return this.findOne({
    where: {
      completed: false,
      userId: userId
    },
    include: {
      model: Product
    }
  })
}

Order.findOrderWithProductInfo = function(orderId) {
  return this.findOne({
    where: {
      id: orderId
    },
    include: Product
  })
}

Order.findAllOpenOrderWithProductInfo = function(userId) {
  return this.findAll({
    where: {
      completed: false,
      userId: userId
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'name', 'imageURL', 'price', 'quantity'],
        through: {
          attributes: ['orderQuantity']
        }
      }
    ]
  })
}

Order.findAllClosedOrderWithProductInfo = function(userId) {
  return this.findAll({
    where: {
      completed: true,
      userId: userId
    },
    include: [
      {
        model: Product,
        attributes: ['name', 'imageURL', 'price'],
        through: {
          attributes: ['orderQuantity']
        }
      }
    ]
  })
}

module.exports = Order
