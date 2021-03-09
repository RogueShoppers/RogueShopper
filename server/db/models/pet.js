const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')

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

//class methods
Pet.findPetsAndUsers = function() {
  return this.findAll({
    include: {
      model: User,
      as: 'myOwner'
    }
  })
}

module.exports = Pet
