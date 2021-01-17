const axios = require('axios');


const getProducts = async () => {
  return await axios.get('http://localhost:3000/products?id='); 
} 

const getProduct = async (id) => {
  return await axios.get(`http://localhost:3000/products?id=${id}`);
}

// getToDo().then(res => console.log(res.data))

const postProduct = async (product) => {
  return await axios.post('http://localhost:3000/products', product)
}

const putProduct = async (product)=> {
  return await axios.put(`http://localhost:3000/products?id=${product._id}`, product)
}

const deleteProduct = async (id) => {
  return await axios.delete(`http://localhost:3000/products?id=${id}`);
}

export { getProducts, getProduct, postProduct, putProduct, deleteProduct };
