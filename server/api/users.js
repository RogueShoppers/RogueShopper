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
    // const users = await User.findUsersAndPets(req.params)
    // console.log(res.json(users), "res.json!!!!")
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
