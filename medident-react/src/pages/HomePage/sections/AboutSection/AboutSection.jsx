import React from 'react';
import styles from './AboutSection.module.css';
import Button from '../../../../components/ui/Button';

const AboutSection = () => {
  const features = [
    {
      icon: 'fas fa-microscope',
      title: 'Clinically Proven',
      description: 'Our formula is backed by extensive clinical research and dentist recommendations worldwide.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Natural Ingredients',
      description: 'Made with carefully selected natural ingredients that are gentle yet effective for daily use.'
    },
    {
      icon: 'fas fa-award',
      title: 'Award Winning',
      description: 'Recognized by dental professionals and trusted by millions of customers globally.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Fast Acting',
      description: 'Experience noticeable relief from sensitivity within days of regular use.'
    }
  ];

  const achievements = [
    {
      number: '15+',
      label: 'Years of Excellence',
      description: 'Serving customers worldwide'
    },
    {
      number: '50M+',
      label: 'Tubes Sold',
      description: 'Trusted by millions'
    },
    {
      number: '95%',
      label: 'Effectiveness Rate',
      description: 'Clinically proven results'
    },
    {
      number: '100+',
      label: 'Countries',
      description: 'Global presence'
    }
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>About Medident</h2>
              <p className={styles.sectionSubtitle}>
                Your trusted partner in oral care for over 15 years
              </p>
            </div>
            
            <div className={styles.aboutDescription}>
              <p>
                Medident has been at the forefront of dental care innovation, 
                developing specialized solutions for sensitive teeth. Our commitment 
                to quality and effectiveness has made us a trusted choice for 
                dentists and patients worldwide.
              </p>
              <p>
                We understand that tooth sensitivity can impact your daily life, 
                from enjoying your favorite foods to maintaining proper oral hygiene. 
                That's why we've dedicated years of research to creating products 
                that provide real relief while promoting overall dental health.
              </p>
            </div>

            <div className={styles.missionStatement}>
              <div className={styles.missionIcon}>
                <i className="fas fa-heart" aria-hidden="true"></i>
              </div>
              <div className={styles.missionText}>
                <h3>Our Mission</h3>
                <p>
                  To provide innovative, effective, and gentle oral care solutions 
                  that help people live confidently without the worry of tooth sensitivity.
                </p>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <Button variant="primary" size="large">
                Learn Our Story
              </Button>
              <Button variant="outline" size="large">
                Contact Us
              </Button>
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.imageContainer}>
              <img 
                src="/assets/about-medident.svg" 
                alt="Medident Laboratory and Research"
                className={styles.aboutImage}
              />
              <div className={styles.floatingCard}>
                <div className={styles.cardContent}>
                  <i className="fas fa-users" aria-hidden="true"></i>
                  <div>
                    <strong>50M+</strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Why Choose Medident?</h3>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={feature.icon} aria-hidden="true"></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className={styles.achievementsSection}>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementItem}>
                <div className={styles.achievementNumber}>
                  {achievement.number}
                </div>
                <div className={styles.achievementLabel}>
                  {achievement.label}
                </div>
                <div className={styles.achievementDescription}>
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className={styles.valuesSection}>
          <div className={styles.valuesContent}>
            <div className={styles.valuesText}>
              <h3>Our Values</h3>
              <div className={styles.valuesList}>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4>Quality First</h4>
                    <p>We never compromise on the quality of our products and ingredients.</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4>Customer Care</h4>
                    <p>Your satisfaction and oral health are our top priorities.</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4>Innovation</h4>
                    <p>Constantly improving our formulations with the latest research.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.valuesImage}>
              <img 
                src="/assets/medident-values.svg" 
                alt="Medident Company Values"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;