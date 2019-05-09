const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/pratica')
require('./models/Products')

const Product = mongoose.model('Product')

app.use('/api', require('./routes'))

app.listen(3000)
