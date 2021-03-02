const Sequelize = require('sequelize')
const db = require('../db')

const Pet = db.define('pet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  age: {
    type: Sequelize.INTEGER
  },
  favoriteToy: {
    type: Sequelize.STRING
  }
})

module.exports = Pet
