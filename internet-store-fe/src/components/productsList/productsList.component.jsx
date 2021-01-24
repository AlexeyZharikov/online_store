import React, {Component} from 'react';
import './productsList.component.scss';
import {getProducts} from '../../services/fakeapi.js'
import { Link } from 'react-router-dom';

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
      <Link to={`/products/${props.product._id}`}>Details</Link>
  </div>

)
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getProducts().then(res => {
      this.setState({products: res.data})
      // console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  getAllProducts() {
    return this
      .state
      .products
      .map((prod, i) => {
        return <Product product={prod} key={i}/>
      })
  }

  render() {
    return (
      <div className='products'>
        <div className="container">
          <div className="products-inner">
            {this.getAllProducts()}
          </div>
        </div>
      </div>
    )
  }

}
