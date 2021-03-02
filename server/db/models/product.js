const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  shortDescription: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  longDescription: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
    validate: {
      min: 0.99
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  imageURL: {
    type: Sequelize.TEXT,
    defaultValue: 'https://iconscout.com/icon/bone-1640955'
  },
  tags: {
    type: Sequelize.STRING
  }
})

module.exports = Product
