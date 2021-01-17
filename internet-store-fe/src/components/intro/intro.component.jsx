import React from 'react';
import { Link } from 'react-router-dom';

import './intro.component.scss';

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className="intro-inner">
          <h2 className="intro-sup">My Internet Store</h2>
          <h1 className="intro-header">Welcome</h1>
          <Link to="/products" className="intro-btn">Products</Link>
        </div>
      </div>
    </div>
  )
}

export default Intro;