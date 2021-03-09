const router = require('express').Router()
const {Product, User, Tag} = require('../db/models')
const adminsOnly = require('../utils/adminsOnly')
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
    const singleProduct = await Product.findOne({
      where: {id: id},
      include: Tag
    })
    res.json(singleProduct)
  } catch (err) {
    next(err)
  }
})

//Admin Only: POST /api/products (findOrCreate so that if already exists, will not create duplicate)
router.post('/', adminsOnly, async (req, res, next) => {
  try {
    let [newProduct, wasCreated] = await Product.findOrCreate({
      where: {
        name: req.body.name
      },
      defaults: req.body
    })
    if (wasCreated) {
      res.status(201).json(newProduct)
      return
    }
    res.sendStatus(409).send('Product with that name already exists')
  } catch (error) {
    next(error)
  }
})

//Admin Only: PUT /api/products/:id (updates product in db and sends updated product back)
router.put('/:id', adminsOnly, async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByPk(req.params.id)
    if (!updatedProduct) {
      res.sendStatus(404)
    } else {
      await updatedProduct.update(req.body)
      const product = await Product.findOne({
        where: {
          id: req.params.id
        }
      })
      res.send(product)
    }
  } catch (error) {
    next(error)
  }
})

//Admin Only: DELETE /api/products/:id
router.delete('/:id', adminsOnly, async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByPk(req.params.id)
    if (!deletedProduct) {
      res.sendStatus(404)
    } else {
      await deletedProduct.destroy()
      res.sendStatus(204)
    }
  } catch (error) {
    next(error)
  }
})
