import React from 'react';
import {putProduct, getProduct} from '../../services/fakeapi.js';


class editProduct extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        title: '',
        type: '',
        description: '',
        quantity: ''
      }

    }

    componentDidMount() {
      const id = this.props.match.params.id;
      getProduct(id).then(res => {
        const product = res.data;
        
        this.setState({id: product._id, title: product.title, type: product.type, description: product.description, quantity: product.quantity})
      })
    }

    onChangeTitle(event){
      // console.log('RUKAVA')
        this.setState({title: event.target.value});
    }

    onChangeType(event){
       this.setState({type: event.target.value});
    }

    onChangeDescription(event) { 
      this.setState ({description: event.target.value});
    }

    onChangeQuantity (event) {
      this.setState ({quantity: event.target.value});
    }

    onSubmit(event){
      event.preventDefault();

      const product = {
        title: this.state.title,
        type: this.state.type,
        description: this.state.description,
        quantity: this.state.quantity,
        _id: this.state.id

      }
      putProduct(product).then(res => console.log(res)).catch(err => console.log(err))
    }


  render(){
    return(
      <div className="createProduct">
        <div className="container">
          <div className="createProduct-inner">
            <form>
                <div className="form-group">
                  <label>Title: </label>
                  <input type="text" required className="form-text" defaultValue={this.state.title} onChange={(event) => this.onChangeTitle(event)}/>
                </div>
                <div className="form-group">
                  <label>Type: </label>
                  <input type="text" required className="form-text" value={this.state.type} onChange={(event) => this.onChangeType}/>
                </div>
                <div className="form-group">
                  <label>Description: </label>
                  <input type="text" required className="form-text" value={this.state.description} onChange={(event) => this.onChangeDescription}/>
                </div>
                <div className="form-group">
                  <label>Quantity: </label>
                  <input type="text" required className="form-text" value={this.state.quantity} onChange={(event) => this.onChangeQuantity}/>
                </div>
                <div className="form-group">
                  <input onClick={(event) => this.onSubmit(event)} type="submit" className="submit-btn" value="Save" />
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default editProduct;