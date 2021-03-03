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
      min: 0 // great validation here!
    }
  },
  imageURL: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://fishsubsidy.org/wp-content/uploads/2020/01/dog-begging3.jpg'
  }
})

module.exports = Product
