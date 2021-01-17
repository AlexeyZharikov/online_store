const OrderModel = require('../../../models').orderModel;

const createOrder = (req, res) => {
  const { _id } = req.body;

  const newOrder = new OrderModel({
    _id,
  });

  return newOrder
    .save()
    .then(() => res.status(201).json('New order with id: ' + `${_id}` + ' was created'))
    .catch((err) => res.status(500).json(err));
};

module.exports = createOrder;
