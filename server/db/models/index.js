const Sequelize = require('sequelize')
const User = require('./user')
const Product = require('./product')
const Pet = require('./pet')
const Tag = require('./tag')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
User.hasMany(Pet, {
  foreignKey: {
    name: 'user_id',
    allowNull: false
  }
})

Pet.belongsTo(User)

module.exports = {
  User,
  Product,
  Pet,
  Tag
}
