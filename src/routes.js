const express = require('express')

const routes = express.routes()
const ProductController = require('')

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products:id', ProductController.delete)

module.exports = routes
