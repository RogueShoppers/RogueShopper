const router = require('express').Router()
const {Pet} = require('../db/models')
module.exports = router

//GET /api/petsAndUsers
router.get('/', async (req, res, next) => {
  try {
    const pets = await Pet.findPetsAndUsers()
    res.json(pets)
  } catch (error) {
    next(error)
  }
})
