// Import Packages
const express = require('express')
const router = express.Router()

const Results = require('../models/results')

router.post('/', async (req, res) => {
  let results = await Results.find({
    title: { $regex: req.body.search, $options: 'i' }
  })

  res.render('results', { results })
})

// Create POST controller
module.exports = router

// Export module
