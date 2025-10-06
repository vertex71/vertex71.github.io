import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/assets/medident-logo.svg" alt="Medident Logo" className="logo" />
              <span className="brand-name">Medident</span>
            </div>
            <p>Advanced sensitivity protection for every smile. Made in Bangladesh with pride.</p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="#products">Medident Sensitive Care</a></li>
              <li><a href="#benefits">Product Benefits</a></li>
              <li><a href="#usage">Usage Instructions</a></li>
              <li><a href="#buy">Buy Online</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Oral Health</h4>
            <ul className="footer-links">
              <li><a href="#sensitivity">Understanding Sensitivity</a></li>
              <li><a href="#tips">Dental Care Tips</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#education">Educational Resources</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#quality">Quality Standards</a></li>
              <li><a href="#manufacturing">Manufacturing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Vertex International. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;