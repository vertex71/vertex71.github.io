import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleNavClick = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/vi-logo.jpeg" alt="VERTEX International Logo" className="logo" />
            <span className="brand-name">VERTEX International</span>
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <button onClick={() => handleNavClick('home')} className="nav-link">Home</button>
            </li>
            <li className="nav-item dropdown">
              <button onClick={() => handleNavClick('products')} className="nav-link">Products <i className="fas fa-chevron-down"></i></button>
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
              <button onClick={() => handleNavClick('sensitivity')} className="nav-link">Oral Health <i className="fas fa-chevron-down"></i></button>
              <div className="dropdown-content">
                <a href="#sensitivity">Understanding Sensitivity</a>
                <a href="#education">Dental Care Tips</a>
                <a href="#faq">FAQ</a>
              </div>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick('about')} className="nav-link">About Us</button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
            </li>
            <li className="nav-item">
              <button onClick={handleCartClick} className="cart-btn">
                <i className="fas fa-shopping-cart"></i>
                {getTotalItems() > 0 && (
                  <span className="cart-count">{getTotalItems()}</span>
                )}
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick('products')} className="nav-link cta-btn">Buy Online</button>
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