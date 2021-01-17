const orderRouter = require('express').Router();
const createOrder = require('../../actions').orders.createOrder;
const getOrder = require('../../actions').orders.getOrder;
const deleteOrder = require('../../actions').orders.deleteOrder;

orderRouter.post('/', createOrder);

orderRouter.get('/', getOrder);

orderRouter.delete('/', deleteOrder);

module.exports = orderRouter;
