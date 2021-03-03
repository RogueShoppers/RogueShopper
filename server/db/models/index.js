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
//one to many - user to pets
User.hasMany(Pet, {
  user_id: {
    allowNull: false,
    defaultValue: 0
  }
})

Pet.belongsTo(User)

//many to many product belongs to manyUsers
Product.belongsToMany(User, {through: 'order'})
User.belongsToMany(Product, {through: 'order'})

//product belongs to many
Product.belongsToMany(Tag, {through: 'product-tag'})
Tag.belongsToMany(Product, {through: 'product-tag'})

module.exports = {
  User,
  Product,
  Pet,
  Tag
}
