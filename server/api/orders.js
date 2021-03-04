const router = require('express').Router()
const {Order, Product} = require('../db/models')
module.exports = router

// GET /api/orders?status=(open or close)
router.get('/', async (req, res, next) => {
  try {
    const {status} = req.query
    if (status === 'open') {
      const [allOpenOrders] = await Order.findAll({
        where: {
          completed: false
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
      res.json(allOpenOrders)
    }
    if (status === 'close') {
      const allClosedOrders = await Order.findAll({
        where: {
          completed: true
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
