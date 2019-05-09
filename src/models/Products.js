const mongoose = require('mongoose')
const mogoosePaginate = require('mongoose-paginate')

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

productSchema.plugin(mogoosePaginate)
mongoose.model('Product', productSchema)
