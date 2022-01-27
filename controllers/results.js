// Import Packages
const express = require('express')
const router = express.Router()

router.get('/results', (req, res) => {
  res.render('results', { results })
})

const Results = require('../models/results')

router.post('/', async (req, res) => {
  let results = await Results.find[{}]
  console.log(results)

  const filterResults = results => {
    let filteredArray = []
    results.forEach((object, i) => {
      if (object.title.includes(req.body.search)) {
        filteredArray.push(object)
      }
    })
    return filteredArray
  }

  let filteredResult = filterResults(results)

  res.render('results', { filteredResult })
})

// Create POST controller
module.exports = router
// Export module
