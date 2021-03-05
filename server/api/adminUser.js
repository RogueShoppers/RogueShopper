const router = require('express').Router()
const {User, Product} = require('../db/models')
module.exports = router
const adminsOnly = require('../utils/adminsOnly')

//GET /api/users (shows all users for admin use)
router.get('/', adminsOnly(), async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: ['id', 'fullName', 'email', 'address', 'isAdmin']
    })
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
})

//GET /api/products (shows all products for admin use)
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (error) {
    next(error)
  }
})

//POST /api/products (findOrCreate so that if already exists, will not create duplicate)
router.post('/', async (req, res, next) => {
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

//PUT /api/products/:id (updates product in db and sends updated product back)
router.put('/:id', async (req, res, next) => {
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

//DELETE /api/products/:id
router.delete('/:id', async (req, res, next) => {
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

//DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedUser = await User.findByPk(req.params.id)
    if (!deletedUser) {
      res.sendStatus(404)
    } else {
      await deletedUser.destory()
      res.sendStatus(204)
    }
  } catch (error) {
    next(error)
  }
})
