const Sequelize = require('sequelize')
const db = require('../db')

const Pet = db.define('pet', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  favoriteToy: {
    type: Sequelize.STRING
  }
})

module.exports = Pet
