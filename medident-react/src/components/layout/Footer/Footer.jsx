import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { footerLinks, socialLinks } from '../../../data/navigation';
import { IMAGE_PATHS, COMPANY_NAME } from '../../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <img src={IMAGE_PATHS.LOGO} alt="Medident Logo" className={styles.logo} />
            <span className={styles.brandName}>Medident</span>
          </div>
          <p>Advanced sensitivity protection for every smile. Made in Bangladesh with pride.</p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4>Products</h4>
          <ul className={styles.footerLinks}>
            {footerLinks.products.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Oral Health</h4>
          <ul className={styles.footerLinks}>
            {footerLinks.oralHealth.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Company</h4>
          <ul className={styles.footerLinks}>
            {footerLinks.company.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            {footerLinks.legal.map((link, index) => (
              <Link key={index} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;