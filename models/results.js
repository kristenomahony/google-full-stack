const mongoose = require('mongoose')
module.exports = mongoose.model('Results')
// Create the results moodel
mongoose.model('results', {
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
