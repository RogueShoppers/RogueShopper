const {Sequelize, DataTypes} = require('sequelize')
const db = require('../db')

// Where will tag get used? Would it make more sense as a column on a different table?
const Tag = db.define('tag', {
  toyType: {

    type: Sequelize.ARRAY(Sequelize.STRING)

  }
})

module.exports = Tag
