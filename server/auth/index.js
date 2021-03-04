const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

//PUT /auth/login
router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, error => (error ? next(error) : res.json(user)))
    }
  } catch (error) {
    next(error)
  }
})

//POST /auth/signup
router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, error => (error ? next(error) : res.json(user)))
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(error)
    }
  }
})

//DELETE /auth/logout
router.delete('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

//GET /auth/me
router.get('/me', (req, res) => {
  res.json(req.user)
})

//PUT /auth/me
router.put('/me', async (req, res, next) => {
  try {
    res.json(await req.user.update(req.body))
  } catch (error) {
    console.log('Error editing my user data!', error)
  }
})

router.use('/google', require('./google'))
