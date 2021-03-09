const router = require('express').Router()
const {Order, Product, User} = require('../db/models')
const adminsOnly = require('../utils/adminsOnly')
module.exports = router

// Admin Only: GET /api/orders
router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const allOrders = await Order.findAll()
    res.json(allOrders)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders?status=(open or close)
router.get('/', async (req, res, next) => {
  try {
    const {status} = req.query
    const userId = req.user ? req.user.id : null

    //if query status is open, only find orders that have completed = false
    if (status === 'open') {
      const [myOpenOrder] = await Order.findAllOpenOrderWithProductInfo(userId)
      res.json(myOpenOrder)
    }
    //if query status is close, only find orders that have completed = true
    if (status === 'close') {
      const allClosedOrders = await Order.findAllClosedOrderWithProductInfo(
        userId
      )
      res.json(allClosedOrders)
    }
  } catch (error) {
    next(error)
  }
})

//POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    const {productId, quantity} = req.body
    const userId = req.user ? req.user.id : null

    //Create new open order on Order Model for the logged in user or guest
    //If order id already exist, find that order
    let [newOrder] = await Order.findOrCreate({
      where: {
        completed: false,
        userId: userId
      },
      include: Product
    })

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

//DELETE /api/orders/products/:productId
router.delete('/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId)
    const userId = req.user ? req.user.id : null

    let currentOpenOrder = await Order.findOpenOrder(userId)
    let product = await Product.findByPk(productId)
    await currentOpenOrder.removeProduct(product)

    //wait for all updates to be loaded to newOrder
    currentOpenOrder = await currentOpenOrder.reload()
    res.json(currentOpenOrder)
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/
router.put('/', async (req, res, next) => {
  try {
    const {productId, quantity} = req.body
    const userId = req.user ? req.user.id : null

    let currentOpenOrder = await Order.findOpenOrder(userId)
    let product = await Product.findByPk(productId)
    await currentOpenOrder.addProduct(product, {
      through: {orderQuantity: quantity}
    })

    //wait for all updates to be loaded to newOrder
    currentOpenOrder = await currentOpenOrder.reload()
    res.json(currentOpenOrder)
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/:orderId/users/:userId
router.put('/:orderId/users/:userId', async (req, res, next) => {
  try {
    const orderId = Number(req.params.orderId)
    const userId = Number(req.params.userId)

    //find the order with order ID (including Product info)
    let order = await Order.findOrderWithProductInfo(orderId)
    let user = await User.findByPk(userId)

    if (order.userId === null) {
      user.setOrders(order)
    }
    order = await order.reload()
    res.send(order)
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/:orderId
router.put('/:orderId', async (req, res, next) => {
  try {
    const orderId = Number(req.params.orderId)

    //find the order with order ID (including Product info)
    let order = await Order.findOrderWithProductInfo(orderId)

    //get all products associated with order ID (items in cart)
    const products = await order.getProducts()

    //for each products, check if stock has enough quantity to complete order
    for (let i = 0; i < products.length; i++) {
      let product = products[i]
      const currentStock = product.quantity
      const purchasedQty = product['order-product'].orderQuantity
      if (currentStock < purchasedQty) {
        //if there any of the item doesn't have enough stock, send error message and end the loop
        res
          .status(401)
          .send(`Oops, we don't have enough stock for ${product.name}.`)
        return
      }
      //other wise, reduce the stock
      await product.update({quantity: currentStock - purchasedQty})
    }
    //update the current order's completed status to true
    await order.update({completed: true})
    //wait to make sure all the updates are loaded
    order = await order.reload()
    res.send(order)
  } catch (error) {
    next(error)
  }
})
