import React from 'react';
import { FOOTER } from '../../../common';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/assets/vi-logo.jpeg" alt={FOOTER.BRANDING.ALT_TEXT} className="logo" />
              <span className="brand-name">{FOOTER.BRANDING.BRAND_NAME}</span>
            </div>
            <p>{FOOTER.BRANDING.TAGLINE}</p>
            <div className="social-links">
              <a href={FOOTER.SOCIAL.URLS.FACEBOOK} className="social-link" aria-label={FOOTER.SOCIAL.ARIA_LABELS.FACEBOOK}><i className="fab fa-facebook"></i></a>
              <a href={FOOTER.SOCIAL.URLS.INSTAGRAM} className="social-link" aria-label={FOOTER.SOCIAL.ARIA_LABELS.INSTAGRAM}><i className="fab fa-instagram"></i></a>
              <a href={FOOTER.SOCIAL.URLS.YOUTUBE} className="social-link" aria-label={FOOTER.SOCIAL.ARIA_LABELS.YOUTUBE}><i className="fab fa-youtube"></i></a>
              <a href={FOOTER.SOCIAL.URLS.LINKEDIN} className="social-link" aria-label={FOOTER.SOCIAL.ARIA_LABELS.LINKEDIN}><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{FOOTER.SECTIONS.PRODUCTS.TITLE}</h4>
            <ul className="footer-links">
              <li><a href="#products">{FOOTER.SECTIONS.PRODUCTS.LINKS.MEDIDENT_SENSITIVE_CARE}</a></li>
              <li><a href="#benefits">{FOOTER.SECTIONS.PRODUCTS.LINKS.PRODUCT_BENEFITS}</a></li>
              <li><a href="#usage">{FOOTER.SECTIONS.PRODUCTS.LINKS.USAGE_INSTRUCTIONS}</a></li>
              <li><a href="#buy">{FOOTER.SECTIONS.PRODUCTS.LINKS.BUY_ONLINE}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{FOOTER.SECTIONS.ORAL_HEALTH.TITLE}</h4>
            <ul className="footer-links">
              <li><a href="#sensitivity">{FOOTER.SECTIONS.ORAL_HEALTH.LINKS.UNDERSTANDING_SENSITIVITY}</a></li>
              <li><a href="#tips">{FOOTER.SECTIONS.ORAL_HEALTH.LINKS.DENTAL_CARE_TIPS}</a></li>
              <li><a href="#faq">{FOOTER.SECTIONS.ORAL_HEALTH.LINKS.FAQ}</a></li>
              <li><a href="#education">{FOOTER.SECTIONS.ORAL_HEALTH.LINKS.EDUCATIONAL_RESOURCES}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{FOOTER.SECTIONS.COMPANY.TITLE}</h4>
            <ul className="footer-links">
              <li><a href="#about">{FOOTER.SECTIONS.COMPANY.LINKS.ABOUT_US}</a></li>
              <li><a href="#contact">{FOOTER.SECTIONS.COMPANY.LINKS.CONTACT}</a></li>
              <li><a href="#quality">{FOOTER.SECTIONS.COMPANY.LINKS.QUALITY_STANDARDS}</a></li>
              <li><a href="#manufacturing">{FOOTER.SECTIONS.COMPANY.LINKS.MANUFACTURING}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>{FOOTER.BOTTOM.COPYRIGHT(currentYear)}</p>
            <div className="footer-bottom-links">
              <a href="#privacy">{FOOTER.BOTTOM.LINKS.PRIVACY_POLICY}</a>
              <a href="#terms">{FOOTER.BOTTOM.LINKS.TERMS_OF_SERVICE}</a>
              <a href="#sitemap">{FOOTER.BOTTOM.LINKS.SITEMAP}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;