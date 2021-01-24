import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx'
import getAllProducts from './components/productsList/productsList.component';
import getOneProduct from './components/productOne/productOne.component'
import Home from './components/home/home.component.jsx';
import adminPage from './components/adminpage/adminpage.component';
import createProduct from './components/createProduct/ createproduct.component';
import editProduct from './components/editProduct/editProduct.component'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={getAllProducts} />
        <Route path="/products/:id" component={getOneProduct} />
        <Route path="/admin/" exact component={adminPage} />
        <Route path="/admin/create" component={createProduct} />
        <Route path="/admin/edit/:id" component={editProduct} />
        <Route path="/about" component={Footer}/>
      </Router>

    </div>
  );
}

export default App;
