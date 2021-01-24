import React, {Component} from 'react';
import {getProduct} from '../../services/fakeapi'

const ProductItem = props => (
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

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      description: '',
      quantity: ''
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    getProduct(id).then(res => {
      const products = res.data;
      this.setState({
        title: products.title, 
        type: products.type, 
        description: products.description, 
        quantity: products.quantity})
      console.log(products)
    }).catch((error) => {
      console.log(error)
    })
  }

  getOneProduct() {
    const product = {
      title: this.state.title,
      type: this.state.type,
      description: this.state.description,
      quantity: this.state.quantity
    }
    return <ProductItem product={product}/>

  }

  render() {
    return (
      <div className='products'>
        <div className="container">
          <div className="products-inner">
            {this.getOneProduct()}
          </div>
        </div>
      </div>
    )
  }
}