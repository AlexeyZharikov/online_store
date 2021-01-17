const orderModel = require('../../../models').orderModel;

const getOrder = (req, res) => {
  const { id } = req.query;
  if (id) {
    
    return orderModel
      .findById(id)
      .then((order) => res.status(200).json(order))
      .catch((err) => res.status(500).json(err));
  }

  return orderModel
    .find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json(err));
};

module.exports = getOrder;
