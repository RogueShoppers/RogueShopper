const Sequelize = require('sequelize')
const db = require('../db')

const Tag = db.define('tag', {
  toyType: {
    type: Sequelize.ARRAY
  }
})

module.exports = Tag
