const router = require('express').Router()
const {Order, Product} = require('../db/models')
module.exports = router

// GET /api/orders/:userId?status=(open or close)
router.get('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const {status} = req.query
    if (status === 'open') {
      const [allOpenOrders] = await Order.findAll({
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
      res.json(allOpenOrders)
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
