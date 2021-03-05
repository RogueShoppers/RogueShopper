const router = require('express').Router()
const {User} = require('../db/models')
// const adminsOnly = require('../utils/adminsOnly')
module.exports = router

const adminsOnly = (req, res, next) => {
  console.log('req', req.user)
  if (req.user && req.user.isAdmin) next()
  else {
    const error = new Error('Unauthorized access attempt')
    error.status = 401
    next(error)
  }
}

//GET /api/users (shows all users for admin use)
router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'fullName', 'email', 'address', 'isAdmin']
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
})
