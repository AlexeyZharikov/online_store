import React, {Component} from 'react';
import './adminpage.component.scss';
import {getProducts, deleteProduct} from '../../services/fakeapi.js'
import {Link} from 'react-router-dom';

const Product = props => (
  <div className="product_item">
    <p className="product_title">
      <span>Title:
      </span>{props.product.title}</p>
    <p className="product_type">
      <span>Type:
      </span>{props.product.type}</p>
    <p className="product_descriprion">
      <span>Description:
      </span>{props.product.description}</p>
    <p className="product_quantity">
      <span>Price:
      </span>{props.product.quantity}</p>
    <Link
      to={{
      pathname: `/admin/edit/${props.product._id}`,
      product: props.product
    }}
      className="edit-btn"
      onClick=''>Edit</Link>
    <button onClick={() => props.remove(props.product._id)} className="delete-btn">delete</button>
  </div>

)
export default class adminPage extends Component {
  constructor(props) {
    super(props);

    this.removeProduct = this
      .removeProduct
      .bind(this);
    this.getAllProducts = this
      .getAllProducts
      .bind(this);

    this.state = {
      products: [],
      title: '',
      type: '',
      description: '',
      quantity: ''
    }
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    getProducts()
      .then(res => {
        this.setState({products: res.data});

      });
  }

  removeProduct(id) {
    deleteProduct(id).then(() => this.getAllProducts());
  }

  render() {
    const products = this
    .state
    .products
    .map(prod => {
      return <Product product={prod} remove={this.removeProduct}/>
    })
    return (

      <div className='products'>
        <div className="container">
          <Link to="/admin/create" className="create-btn">Create</Link>
          <div className="products-inner">
            {products}
          </div>
        </div>
      </div>

    )
  }
}
