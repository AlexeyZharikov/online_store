const productModel = require('../../../models').productModel;

const updateProduct = (req, res) => {
  const { id } = req.query;
  const { title, type, description, quantity } = req.body;
  console.log(req.body)

  return productModel
    .findById(id)
    .then((product) => {
      product.title = title;
      product.type = type;
      product.description = description;
      product.quantity = Number(quantity);

      return product
        .save()
        .then(() => res.status(200).json('Product updated'))
        .catch((err) => res.status(500).json(err.message));
    })

    .catch((err) => res.status(500).json(err.message));
};

module.exports = updateProduct;
