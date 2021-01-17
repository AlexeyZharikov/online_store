import React, {Component} from 'react';
import './products.component.scss';
import {getProducts} from '../../services/fakeapi.js'

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
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  getAllProducts() {
    return this
      .state.products.map(prod => {
        return <Product product={prod}/>
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

