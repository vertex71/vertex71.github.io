import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/medident-logo.svg" alt="Medident Logo" className="logo" />
            <span className="brand-name">Medident</span>
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#products" className="nav-link">Products <i className="fas fa-chevron-down"></i></a>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h5>Our Products</h5>
                  <a href="#sensitive-care">
                    <i className="fas fa-tooth"></i>
                    Medident Sensitive Care
                  </a>
                  <a href="#gum-care">
                    <i className="fas fa-heart"></i>
                    Medident-G Gum Care
                  </a>
                </div>
                <div className="dropdown-section">
                  <h5>Product Tools</h5>
                  <a href="#compare">
                    <i className="fas fa-balance-scale"></i>
                    Compare Products
                  </a>
                  <a href="#product-finder">
                    <i className="fas fa-search"></i>
                    Find Right Product
                  </a>
                </div>
                <div className="dropdown-section">
                  <a href="#buy" className="dropdown-cta">
                    <i className="fas fa-shopping-cart"></i>
                    Buy Online
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#sensitivity" className="nav-link">Oral Health <i className="fas fa-chevron-down"></i></a>
              <div className="dropdown-content">
                <a href="#sensitivity">Understanding Sensitivity</a>
                <a href="#education">Dental Care Tips</a>
                <a href="#faq">FAQ</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link cta-btn">Buy Online</a>
            </li>
          </ul>
          
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;