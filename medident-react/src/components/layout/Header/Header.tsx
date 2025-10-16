import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import './Header.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close any open dropdowns when toggling menu
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 767) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleCartClick = () => {
    setIsMenuOpen(false);
    navigate('/cart');
  };

  const handleNavClick = (sectionId: string) => {
    // Close mobile menu when navigation occurs
    setIsMenuOpen(false);
    
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

  const handleLogoClick = () => {
    console.log('Logo clicked - navigating to home');
    console.log('Current pathname:', window.location.pathname);
    setIsMenuOpen(false);
    
    // If already on home page, scroll to top
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log('Already on homepage, scrolled to top');
    } else {
      // Navigate to home
      try {
        navigate('/');
        console.log('Navigate called with React Router');
      } catch (error) {
        console.log('React Router navigation failed, using window.location');
        window.location.href = '/';
      }
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar">
        <div className="nav-container">
          <button type="button" className="nav-logo" onClick={handleLogoClick}>
            <img src="/assets/vi-logo.jpeg" alt="VERTEX International Logo" className="logo" />
            <span className="brand-name">VERTEX International</span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <button onClick={() => handleNavClick('home')} className="nav-link">Home</button>
            </li>
            <li className="nav-item dropdown">
              <button 
                onClick={() => {
                  if (window.innerWidth <= 767) {
                    toggleDropdown('products');
                  } else {
                    handleNavClick('products');
                  }
                }} 
                className="nav-link"
              >
                Products <i className={`fas fa-chevron-down ${openDropdown === 'products' ? 'open' : ''}`}></i>
              </button>
              <div className={`dropdown-content ${openDropdown === 'products' ? 'active' : ''}`}>
                <div className="dropdown-section">
                  <h5>Our Products</h5>
                  <a href="#sensitive-care" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-tooth"></i>
                    Medident Sensitive Care
                  </a>
                  <a href="#gum-care" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-heart"></i>
                    Medident-G Gum Care
                  </a>
                </div>
                <div className="dropdown-section">
                  <h5>Product Tools</h5>
                  <a href="#compare" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-balance-scale"></i>
                    Compare Products
                  </a>
                  <a href="#product-finder" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-search"></i>
                    Find Right Product
                  </a>
                </div>
                <div className="dropdown-section">
                  <a href="#buy" className="dropdown-cta" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-shopping-cart"></i>
                    Buy Online
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <button 
                onClick={() => {
                  if (window.innerWidth <= 767) {
                    toggleDropdown('oral-health');
                  } else {
                    handleNavClick('sensitivity');
                  }
                }} 
                className="nav-link"
              >
                Oral Health <i className={`fas fa-chevron-down ${openDropdown === 'oral-health' ? 'open' : ''}`}></i>
              </button>
              <div className={`dropdown-content ${openDropdown === 'oral-health' ? 'active' : ''}`}>
                <a href="#sensitivity" onClick={() => setIsMenuOpen(false)}>Understanding Sensitivity</a>
                <a href="#education" onClick={() => setIsMenuOpen(false)}>Dental Care Tips</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
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