import React from 'react';
import styles from './ProductBenefits.module.scss';

const ProductBenefits = () => {
  const benefits = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Round-the-Clock Protection',
      description: 'Advanced formula provides 24/7 sensitivity protection and pain relief, so you can enjoy your favorite foods anytime.'
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Clinically Proven Formula',
      description: 'Scientifically tested and trusted by dental professionals for effective sensitivity relief and oral health improvement.'
    },
    {
      icon: 'fas fa-tooth',
      title: 'Strengthens Enamel',
      description: 'Actively rebuilds and strengthens weakened tooth enamel while providing comprehensive cavity protection.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Gentle & Safe',
      description: 'Gentle formula safe for daily use and sensitive gums, suitable for the whole family\'s oral care routine.'
    },
    {
      icon: 'fas fa-sparkles',
      title: 'Natural Whitening',
      description: 'Gradual whitening removes surface stains naturally without harsh chemicals or damage to tooth enamel.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Made in Bangladesh',
      description: 'Proudly manufactured in Bangladesh with international quality standards and rigorous quality control.'
    }
  ];

  return (
    <section id="benefits" className={styles.productBenefits}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose Medident?</h2>
          <p className={styles.sectionSubtitle}>
            Discover the proven benefits that make our products the trusted choice for oral care
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className={benefit.icon} aria-hidden="true"></i>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.benefitsCta}>
          <h3>Experience the Medident Difference</h3>
          <p>Join millions of satisfied customers who trust Medident for their oral care needs</p>
          <a href="#products" className={styles.ctaButton}>
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;