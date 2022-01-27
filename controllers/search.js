// Packages
const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  res.render('search')
})
// Create here a controller that accepts GET requests and renders the "search" page

// Export
module.exports = router
