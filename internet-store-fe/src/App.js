import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component.jsx';
import getProducts from './components/products/products.component.jsx';
import Home from './components/home/home.component.jsx';
import adminPage from './components/adminpage/adminpage.component.jsx';
import createProduct from './components/createProduct/ createproduct.component.jsx';
import editProduct from './components/editProduct/editProduct.component'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={getProducts} />
        <Route path="/admin/" exact component={adminPage} />
        <Route path="/admin/create" component={createProduct} />
        <Route path="/admin/edit/:id" component={editProduct} />
      </Router>

    </div>
  );
}

export default App;
