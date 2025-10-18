import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import { HEADER } from '../../../common';
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
            <img src="/assets/vi-logo.jpeg" alt={HEADER.BRANDING.ALT_TEXT} className="logo" />
            <span className="brand-name">{HEADER.BRANDING.BRAND_NAME}</span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <button onClick={() => handleNavClick('home')} className="nav-link">{HEADER.NAVIGATION.HOME}</button>
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
                {HEADER.NAVIGATION.PRODUCTS} <i className={`fas fa-chevron-down ${openDropdown === 'products' ? 'open' : ''}`}></i>
              </button>
              <div className={`dropdown-content ${openDropdown === 'products' ? 'active' : ''}`}>
                <div className="dropdown-section">
                  <h5>{HEADER.DROPDOWNS.PRODUCTS.TITLE}</h5>
                  <a href="#sensitive-care" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-tooth"></i>
                    {HEADER.DROPDOWNS.PRODUCTS.SENSITIVE_CARE}
                  </a>
                  <a href="#gum-care" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-heart"></i>
                    {HEADER.DROPDOWNS.PRODUCTS.GUM_CARE}
                  </a>
                </div>
                <div className="dropdown-section">
                  <h5>{HEADER.DROPDOWNS.PRODUCTS.TOOLS_TITLE}</h5>
                  <a href="#compare" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-balance-scale"></i>
                    {HEADER.DROPDOWNS.PRODUCTS.COMPARE_PRODUCTS}
                  </a>
                  <a href="#product-finder" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-search"></i>
                    {HEADER.DROPDOWNS.PRODUCTS.FIND_RIGHT_PRODUCT}
                  </a>
                </div>
                <div className="dropdown-section">
                  <a href="#buy" className="dropdown-cta" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-shopping-cart"></i>
                    {HEADER.DROPDOWNS.PRODUCTS.BUY_ONLINE_CTA}
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
                {HEADER.NAVIGATION.ORAL_HEALTH} <i className={`fas fa-chevron-down ${openDropdown === 'oral-health' ? 'open' : ''}`}></i>
              </button>
              <div className={`dropdown-content ${openDropdown === 'oral-health' ? 'active' : ''}`}>
                <a href="#sensitivity" onClick={() => setIsMenuOpen(false)}>{HEADER.DROPDOWNS.ORAL_HEALTH.UNDERSTANDING_SENSITIVITY}</a>
                <a href="#education" onClick={() => setIsMenuOpen(false)}>{HEADER.DROPDOWNS.ORAL_HEALTH.DENTAL_CARE_TIPS}</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)}>{HEADER.DROPDOWNS.ORAL_HEALTH.FAQ}</a>
              </div>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick('about')} className="nav-link">{HEADER.NAVIGATION.ABOUT_US}</button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick('contact')} className="nav-link">{HEADER.NAVIGATION.CONTACT}</button>
            </li>
            {/* <li className="nav-item">
              <button onClick={handleCartClick} className="cart-btn">
                <i className="fas fa-shopping-cart"></i>
                {getTotalItems() > 0 && (
                  <span className="cart-count">{getTotalItems()}</span>
                )}
              </button>
            </li> */}
            <li className="nav-item">
              <button onClick={() => handleNavClick('products')} className="nav-link cta-btn">{HEADER.NAVIGATION.BUY_ONLINE}</button>
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