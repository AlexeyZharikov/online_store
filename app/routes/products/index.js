const productsRouter = require('express').Router();
const middleware = require('../../middleware');
const createProduct = require('../../actions').products.createProduct;
const getProduct = require('../../actions').products.getProduct;
const deleteProduct = require('../../actions').products.deleteProduct;
const updateProduct = require('../../actions').products.updateProduct;

productsRouter.post('/', createProduct);

productsRouter.get('/', getProduct);

productsRouter.put('/', middleware, updateProduct);

productsRouter.delete('/', middleware, deleteProduct);

module.exports = productsRouter;
