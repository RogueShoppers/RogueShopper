const {Sequelize} = require('sequelize')
const db = require('../db')

const Tag = db.define('tag', {
  type: {
    type: Sequelize.STRING
  }
})

module.exports = Tag
