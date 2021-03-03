const router = require('express').Router()
const {Product, User} = require('../db/models')
module.exports = router

// GET /api/products/
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})
// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const singleProduct = await Product.findByPk(id)
    res.json(singleProduct)
  } catch (err) {
    next(err)
  }
})
