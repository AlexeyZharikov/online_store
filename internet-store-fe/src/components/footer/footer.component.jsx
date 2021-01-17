import React from 'react';
import './footer.component.scss'
import blogsimg1 from '../../img/footer/blogs/blogsimg1.png';
import blogsimg2 from '../../img/footer/blogs/blogsimg2.png';
import blogsimg3 from '../../img/footer/blogs/blogsimg3.png';
import inst1 from '../../img/footer/inst/inst1.png';
import inst2 from '../../img/footer/inst/inst2.png';
import inst3 from '../../img/footer/inst/inst3.png';
import inst4 from '../../img/footer/inst/inst4.png';
import inst5 from '../../img/footer/inst/inst5.png';
import inst6 from '../../img/footer/inst/inst6.png';
import inst7 from '../../img/footer/inst/inst7.png';
import inst8 from '../../img/footer/inst/inst8.png';
import inst9 from '../../img/footer/inst/inst9.png';

const imgArr1 = [blogsimg1, blogsimg2, blogsimg3];
const imgArr2 = [
  inst1,
  inst2,
  inst3,
  inst4,
  inst5,
  inst6,
  inst7,
  inst8,
  inst9
];

function Footer() {
  const instIems = imgArr2.map(img => {
    return (
      <a href="http://localhost:5000/"  className="instagr-item">
        <img src={img} alt={img}/>
      </a>
    )
  })
  const blogItems = imgArr1.map(img => {
    return (
      <div className="blogs-item">
        <img className="blogs-img" src={img} alt="blogsimg1.png"/>
        <div className="blogs-content">
          <a className="blogs-title" href="http://localhost:5000/">Lorem ipsum dolor sit amet, consectetur adipiscing</a>
          <div className="blogs-date">Jan 9, 2016</div>
        </div>
      </div>
    )
  })
  return (
    <footer id="about" className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-col footer-col-first">
            <div className="footer-logo">Internet Store</div>
            <div className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </div>

            <div className="footer-social">
              <div className="footer-social-header">
                <b>15k</b>
                followers
              </div>
              <div className="footer-social-content">
                Follow us:
                <a href="http://localhost:5000/" >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="http://localhost:5000/" >
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="http://localhost:5000/" >
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="http://localhost:5000/" >
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="http://localhost:5000/" >
                  <i className="fab fa-google"></i>
                </a>
                <a href="http://localhost:5000/" >
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="http://localhost:5000/" >
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="http://localhost:5000/" >
                  <i className="fab fa-tumblr"></i>
                </a>
              </div>
            </div>

            <form action="/" className="subscribe" method="post">
              <input
                className="subsc_input"
                type="email"
                name="email"
                placeholder="Your Email..."/>
              <button className="subsc_btn" type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-col footer-col-second">
            <div className="footer-title">Blogs</div>

            <div className="blogs">
              {blogItems}
            </div>
          </div>

          <div className="footer-col footer-col-third">
            <div className="footer-title">Instagram</div>
            <div className="instagram">
              {instIems}
            </div>
          </div>

        </div>

        <div className="copyright">© 2016 MoGo free PSD template by
          <span>Laaqiq</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
