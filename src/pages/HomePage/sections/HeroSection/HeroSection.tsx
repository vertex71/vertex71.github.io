import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.scss';
import Button from '../../../../components/ui/Button/Button';
import { IMAGE_PATHS } from '../../../../utils/constants';

const HeroSection = () => {
  const handleShopNow = () => {
    // Navigate to products or scroll to product section
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    // Navigate to sensitivity section
    const element = document.getElementById('sensitivity');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Advanced Sensitivity Protection for Every Smile
            </h1>
            <p className={styles.heroSubtitle}>
              Local excellence in dental care. Made in Bangladesh with pride for Bangladeshi families.
            </p>
            <div className={styles.heroBadges}>
              <span className={`${styles.badge} ${styles.localBadge}`}>
                <i className="fas fa-flag" aria-hidden="true"></i>
                Made in Bangladesh
              </span>
              <span className={`${styles.badge} ${styles.qualityBadge}`}>
                <i className="fas fa-award" aria-hidden="true"></i>
                International Quality
              </span>
            </div>
            <div className={styles.heroButtons}>
              <Button 
                variant="primary" 
                size="large"
                onClick={handleShopNow}
              >
                Shop Now
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                onClick={handleLearnMore}
              >
                Learn About Sensitivity
              </Button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src={IMAGE_PATHS.HERO_PRODUCT} 
              alt="Medident Toothpaste - Advanced Sensitivity Protection" 
              className={styles.productImage}
            />
            <div className={styles.floatingElements}>
              <div className={`${styles.floatElement} ${styles.tooth}`}>
                <i className="fas fa-tooth" aria-hidden="true"></i>
              </div>
              <div className={`${styles.floatElement} ${styles.shield}`}>
                <i className="fas fa-shield-alt" aria-hidden="true"></i>
              </div>
              <div className={`${styles.floatElement} ${styles.sparkle}`}>
                <i className="fas fa-sparkles" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;