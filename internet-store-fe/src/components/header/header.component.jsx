import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.scss';

function Header() {
  return (
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="header_logo">Internet Store</div>
            <nav className="nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link" >Products</Link>
              <Link to="/" className="nav-link">About</Link>
              {/* <Link className="nav-link" href="/cart"><i class="fas fa-shopping-cart"></i></Link> */}
            </nav>
          </div>
        </div>
      </header>
  );
}

export default Header;