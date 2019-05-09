const express = require('express')

const routes = express.Router()
const ProductController = require('./controllers/ProductCOntroller')

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products:id', ProductController.delete)

module.exports = routes
