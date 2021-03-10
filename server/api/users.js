const router = require('express').Router()
const {User} = require('../db/models')
const adminsOnly = require('../utils/adminsOnly')
module.exports = router

//Admin Only: GET /api/users
router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'address', 'isAdmin']
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
})

//Admin Only: DELETE /api/users/:id
router.delete('/:id', adminsOnly, async (req, res, next) => {
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

//Admin Only: PUT /api/users/:id
router.put('/:id', adminsOnly, async (req, res, next) => {
  try {
    const updatedUser = await User.findByPk(req.params.id)
    if (!updatedUser) {
      res.sendStatus(404)
    } else {
      await updatedUser.update(req.body)
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      })
      res.send(user)
    }
  } catch (error) {
    next(error)
  }
})
