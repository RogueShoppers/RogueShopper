const router = require('express').Router()
const {Order, Product, User} = require('../db/models')
const OrderProduct = require('../db/models/order-product')
module.exports = router

//POST /api/orders/:userId
router.post('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const {productId, quantity} = req.body

    //create new open order on Order Model (if order id already exist, find that order)
    let [newOrder] = await Order.findOrCreate({
      where: {completed: false},
      include: Product
    })

    //set newOrder to associate with logged in user
    let user = await User.findByPk(userId)
    await newOrder.setUser(user)

    //add selected products & the order quantity to newOrder
    let product = await Product.findByPk(productId)

    await newOrder.addProduct(product, {through: {orderQuantity: quantity}})

    //wait for all updates to be loaded to newOrder
    newOrder = await newOrder.reload()

    res.json(newOrder)
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
