const router = require('express').Router()
const User = require('../db/models')
module.exports = router

router.get('portfolio', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    next(error)
  }
})
