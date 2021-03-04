const router = require('express').Router()
const {Order, Product, User} = require('../db/models')
const OrderProduct = require('../db/models/order-product')
module.exports = router

//POST /api/orders/:userId
router.post('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const {productId, quantity} = req.body

    //Create new open order on Order Model for the logged in user.
    //If order id already exist, find that order
    let [newOrder] = await Order.findOrCreate({
      where: {
        completed: false,
        userId: userId
      },
      include: Product
    })

    //set newOrder to associate with logged in user (NOT NEEDED)
    // let user = await User.findByPk(userId)
    // await newOrder.setUser(user)

    //check if existing openOrder already has product with same id
    let currentProducts = await newOrder.getProducts()
    let [existedOrderProduct] = currentProducts.filter(
      item => item.id === Number(productId)
    )
    let product = await Product.findByPk(productId)

    //if product with same id exists, update the orderQuantity to current + added quantity
    if (existedOrderProduct) {
      let currentQty = existedOrderProduct['order-product'].orderQuantity
      await newOrder.addProduct(product, {
        through: {orderQuantity: currentQty + quantity}
      })
    } else {
      //if product with same id doesn't exist, add product with quantity
      await newOrder.addProduct(product, {through: {orderQuantity: quantity}})
    }

    //wait for all updates to be loaded to newOrder
    newOrder = await newOrder.reload()

    res.status(201).send(newOrder)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:userId?status=(open or close)
router.get('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const {status} = req.query
    if (status === 'open') {
      //if query has status of open, only find orders that have completed = false (not processed)
      const [myOpenOrder] = await Order.findAll({
        where: {
          completed: false,
          userId: userId
        },
        include: [
          {
            model: Product,
            attributes: ['id', 'name', 'imageURL', 'price'],
            through: {
              attributes: ['orderQuantity']
            }
          }
        ]
      })
      res.json(myOpenOrder)
    }
    if (status === 'close') {
      //if query has status of close, only find orders that have completed = true (processed)
      const [allClosedOrders] = await Order.findAll({
        where: {
          completed: true,
          userId: userId
        },
        include: [
          {
            model: Product,
            attributes: ['name', 'imageURL', 'price'],
            through: {
              attributes: ['orderQuantity']
            }
          }
        ]
      })
      res.json(allClosedOrders)
    }
  } catch (error) {
    next(error)
  }
})

//DELETE /api/orders/:userId/products/:productId
router.delete('/:userId/products/:productId', async (req, res, next) => {
  try {
    const userId = Number(req.params.userId)
    const productId = Number(req.params.productId)

    let currentOpenOrder = await Order.findOne({
      where: {
        completed: false,
        userId: userId
      },
      include: Product
    })
    let product = await Product.findByPk(productId)
    await currentOpenOrder.removeProduct(product)

    //wait for all updates to be loaded to newOrder
    currentOpenOrder = await currentOpenOrder.reload()

    console.log(currentOpenOrder)
    res.json(currentOpenOrder)
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/:userId/
router.put('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const {productId, quantity} = req.body

    let currentOpenOrder = await Order.findOne({
      where: {
        completed: false,
        userId: userId
      },
      include: Product
    })
    let product = await Product.findByPk(productId)
    await currentOpenOrder.addProduct(product, {
      through: {orderQuantity: quantity}
    })
    currentOpenOrder = await currentOpenOrder.reload()

    res.json(currentOpenOrder)
  } catch (error) {
    next(error)
  }
})
