const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Product', productSchema)
