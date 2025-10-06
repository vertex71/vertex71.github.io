import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { navigationItems } from '../../../data/navigation';
import { IMAGE_PATHS } from '../../../utils/constants';
import { useCart } from '../../../context/CartContext';
import { useToggle } from '../../../hooks/useToggle';

const Header = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const [mobileMenuOpen, toggleMobileMenu, , closeMobileMenu] = useToggle(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(`.${styles.navbar}`)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen, closeMobileMenu]);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = (path) => {
    if (path.startsWith('#')) {
      // Handle anchor links
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };

  const renderNavItem = (item) => {
    const isActive = isActiveLink(item.path);

    if (item.type === 'dropdown') {
      return (
        <li key={item.id} className={`${styles.navItem} ${styles.dropdown}`}>
          <span className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
            {item.label}
            {item.icon && <i className={item.icon} />}
          </span>
          <div className={styles.dropdownContent}>
            {item.children?.map((child) => (
              <Link
                key={child.id}
                to={child.path}
                className={styles.dropdownLink}
                onClick={() => handleLinkClick(child.path)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </li>
      );
    }

    if (item.type === 'cta') {
      return (
        <li key={item.id} className={styles.navItem}>
          <Link
            to={item.path}
            className={`${styles.navLink} ${styles.ctaBtn}`}
            onClick={() => handleLinkClick(item.path)}
          >
            {item.label}
          </Link>
        </li>
      );
    }

    return (
      <li key={item.id} className={styles.navItem}>
        <Link
          to={item.path}
          className={`${styles.navLink} ${isActive ? styles.active : ''}`}
          onClick={() => handleLinkClick(item.path)}
        >
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.navLogo} onClick={closeMobileMenu}>
            <img src={IMAGE_PATHS.LOGO} alt="Medident Logo" className={styles.logo} />
            <span className={styles.brandName}>Medident</span>
          </Link>

          <ul className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ''}`}>
            {navigationItems.map(renderNavItem)}
          </ul>

          <div className={styles.rightSection}>
            {/* Cart Icon */}
            <Link to="/cart" className={styles.cartIcon} title="Shopping Cart">
              <i className="fas fa-shopping-cart" />
              {cartItemCount > 0 && (
                <span className={styles.cartBadge}>{cartItemCount}</span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <div 
              className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
              onClick={toggleMobileMenu}
              role="button"
              tabIndex={0}
              aria-label="Toggle mobile menu"
              onKeyDown={(e) => e.key === 'Enter' && toggleMobileMenu()}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;