import React, {Component} from 'react';
import './createproduct.component.scss';
import { postProduct } from '../../services/fakeapi.js'

export default class createProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      type: '',
      description: '',
      quantity: '',
      products: []
    }
  }

  onChangeTitle(p) {
    this.setState({title: p.target.value})
  }

  onChangeType(p) {
    this.setState({type: p.target.value})
  }

  onChangeDescription(p) {
    this.setState({description: p.target.value})
  }

  onChangeQuantity(p) {
    this.setState({quantity: p.target.value})
  }
  
  onSubmit(p){
    p.preventDefault();

    const product = {
      title: this.state.title,
      type: this.state.type,
      description: this.state.description,
      quantity: this.state.quantity
    }
    console.log(product);

    postProduct(product).then(res => {
      console.log(res.data)
    })
    // .catch((error) => {
    //   console.log(error)
    // })



    window.location  = '/admin/'
  }

  render() {
    return (
      <div className="createProduct">
        <div className="container">
          <div className="createProduct-inner">
            <form>
                <div className="form-group">
                  <label>Title: </label>
                  <input type="text" required className="form-text" value={this.state.title} onChange={this.onChangeTitle}/>
                </div>
                <div className="form-group">
                  <label>Type: </label>
                  <input type="text" required className="form-text" value={this.state.type} onChange={this.onChangeType}/>
                </div>
                <div className="form-group">
                  <label>Description: </label>
                  <input type="text" required className="form-text" value={this.state.description} onChange={this.onChangeDescription}/>
                </div>
                <div className="form-group">
                  <label>Quantity: </label>
                  <input type="text" required className="form-text" value={this.state.quantity} onChange={this.onChangeQuantity}/>
                </div>
                <div className="form-group">
                  <input onClick={this.onSubmit} type="submit" className="submit-btn" value="Save" />
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
