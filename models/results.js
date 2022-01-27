const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('results', {
  title: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  description: String,
  url: String,
  link: [
    {
      title: String,
      url: String
    }
  ]
})
