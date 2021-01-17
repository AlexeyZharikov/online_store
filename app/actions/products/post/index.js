const ProductModel = require('../../../models').productModel;

const createProduct = (req, res) => {
  const { title, type, description } = req.body;
  const quantity = Number(req.body.quantity);

  console.log(req.body);
  const newProduct = new ProductModel({
    title,
    type,
    description,
    quantity,
  });

  return newProduct
    .save()
    .then(() => res.status(201).json('Product added'))
    .catch((err) => {
      console.log(err.message);

      res.status(500).json(err.message)});
      
    
};

module.exports = createProduct;
