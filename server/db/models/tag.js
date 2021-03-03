const {Sequelize, DataTypes} = require('sequelize')
const db = require('../db')

const Tag = db.define('tag', {
  toyType: {
    type: Sequelize.ARRAY(DataTypes.STRING)
  }
})

module.exports = Tag
