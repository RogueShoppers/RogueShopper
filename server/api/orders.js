const router = require('express').Router()
const {Order, Product, User} = require('../db/models')
const OrderProduct = require('../db/models/order-product')
module.exports = router

// GET /api/orders?status=(open or close)
router.get('/', async (req, res, next) => {
  try {
    const {status} = req.query
    if (req.user) {
      const userId = req.user.id
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
              attributes: ['id', 'name', 'imageURL', 'price', 'quantity'],
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
        const allClosedOrders = await Order.findAll({
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
    }
  } catch (error) {
    next(error)
  }
})

//POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    const {productId, quantity} = req.body

    if (req.user) {
      const userId = req.user.id

      //Create new open order on Order Model for the logged in user.
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
    }
  } catch (error) {
    next(error)
  }
})

//DELETE /api/orders/products/:productId
router.delete('/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId)

    if (req.user) {
      const userId = req.user.id

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

      res.json(currentOpenOrder)
    }
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/
router.put('/', async (req, res, next) => {
  try {
    const {productId, quantity} = req.body

    if (req.user) {
      const userId = req.user.id

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
    }
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:orderId
router.get('/:orderId', async (req, res, next) => {
  try {
    const allMyClosedOrders = Order.findAll({
      where: {
        userId: 1
      }
    })
    res.send(allMyClosedOrders)
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/:orderId
router.put('/:orderId', async (req, res, next) => {
  try {
    const orderId = Number(req.params.orderId)

    //find the order with order ID
    let order = await Order.findOne({
      where: {
        id: orderId
      },
      include: Product
    })
    //get all products associated with order ID (items in cart)
    const products = await order.getProducts()

    //for each products, check if stock has enough quantity to complete order
    let includeOutOfStock = false
    for (let i = 0; i < products.length; i++) {
      let product = products[i]
      const currentStock = product.quantity
      const purchasedQty = product['order-product'].orderQuantity
      if (currentStock < purchasedQty) {
        includeOutOfStock = true
        res
          .status(401)
          .send(`Oops, we don't have enough stock for ${product.name}.`)
        break
      }
    }
    //If all of them are in stock, then reduce the current stock with the purchased quantity
    if (!includeOutOfStock) {
      for (let i = 0; i < products.length; i++) {
        let product = products[i]
        const currentStock = product.quantity
        const purchasedQty = product['order-product'].orderQuantity
        await product.update({quantity: currentStock - purchasedQty})
      }
      //update the current order's completed status to true
      await order.update({completed: true})
      //wait to make sure all the updates are loaded
      order = await order.reload()
      res.send(order)
    }
  } catch (error) {
    next(error)
  }
})
