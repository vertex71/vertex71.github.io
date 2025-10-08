import React from 'react';
import styles from './EducationSection.module.css';

const EducationSection = () => {
  const educationCards = [
    {
      icon: 'fas fa-search',
      title: 'What Causes Sensitivity?',
      description: 'Tooth sensitivity occurs when the tooth\'s enamel wears down, exposing the underlying dentin and nerve endings.',
      link: '#learn-more'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Prevention Tips',
      description: 'Use a soft-bristled toothbrush, avoid acidic foods, and choose toothpaste specifically designed for sensitive teeth.',
      link: '#prevention'
    },
    {
      icon: 'fas fa-heart',
      title: 'Treatment Options',
      description: 'Regular use of sensitivity toothpaste like Medident can provide relief and long-term protection.',
      link: '#treatment'
    }
  ];

  const preventionTips = [
    {
      title: 'Use Soft-Bristled Toothbrush',
      description: 'Gentle brushing prevents enamel wear and gum recession'
    },
    {
      title: 'Avoid Acidic Foods',
      description: 'Limit citrus fruits, sodas, and vinegar-based foods'
    },
    {
      title: 'Don\'t Brush Immediately After Eating',
      description: 'Wait 30-60 minutes after meals before brushing'
    },
    {
      title: 'Use Fluoride Toothpaste',
      description: 'Strengthens enamel and prevents decay'
    }
  ];

  return (
    <section className={styles.education}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Understanding Tooth Sensitivity</h2>
          <p className={styles.sectionSubtitle}>
            Learn about causes, prevention, and treatment options
          </p>
        </div>
        
        <div className={styles.educationGrid}>
          {educationCards.map((card, index) => (
            <div key={index} className={styles.educationCard}>
              <div className={styles.cardIcon}>
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} className={styles.learnMore}>
                Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Detailed Information Section */}
        <div className={styles.detailSection}>
          <div className={styles.detailContent}>
            <div className={styles.detailText}>
              <h3>Why Choose Medident for Sensitivity?</h3>
              <p>
                Medident Sensitive Care is specially formulated with advanced ingredients 
                that provide immediate relief while building long-term protection against sensitivity.
              </p>
              <ul className={styles.detailList}>
                <li>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Clinically proven potassium nitrate formula</span>
                </li>
                <li>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Strengthens enamel with fluoride protection</span>
                </li>
                <li>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Gentle daily use formula</span>
                </li>
                <li>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Fresh mint flavor for lasting freshness</span>
                </li>
              </ul>
            </div>
            <div className={styles.detailImage}>
              <img 
                src="/assets/medident-sensitive-care.svg" 
                alt="Medident Sensitive Care Benefits"
              />
            </div>
          </div>
        </div>

        {/* Prevention Tips */}
        <div className={styles.tipsSection}>
          <h3 className={styles.sectionTitle}>Daily Care Tips</h3>
          <p className={styles.sectionSubtitle}>
            Simple habits to protect your teeth from sensitivity
          </p>
          <div className={styles.tipsGrid}>
            {preventionTips.map((tip, index) => (
              <div key={index} className={styles.tipCard}>
                <h4>{tip.title}</h4>
                <p>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;