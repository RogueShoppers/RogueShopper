const router = require('express').Router()
const {User, Product, Order, db} = require('../db/models')
const adminsOnly = require('../utils/adminsOnly')
module.exports = router

//Admin Only: GET /api/search
router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const query = req.params
    const searchResults = await Product.search(query)
  } catch (error) {
    next(error)
  }
})
