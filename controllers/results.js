// Import Packages
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('This is the results page')
})
// Create POST controller

// Export module
module.exports = router
