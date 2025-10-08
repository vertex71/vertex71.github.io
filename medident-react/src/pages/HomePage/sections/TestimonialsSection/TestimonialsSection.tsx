import React, { useState, useEffect } from 'react';
import styles from './TestimonialsSection.module.scss';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 34,
      location: 'New York, NY',
      image: '/assets/testimonial-1.svg',
      rating: 5,
      text: 'I\'ve suffered from sensitive teeth for years. Medident has been a game-changer! I can finally enjoy ice cream again without pain.',
      condition: 'Severe Sensitivity'
    },
    {
      id: 2,
      name: 'Michael Chen',
      age: 28,
      location: 'Los Angeles, CA',
      image: '/assets/testimonial-2.svg',
      rating: 5,
      text: 'As a coffee lover, I was constantly experiencing sensitivity. Medident allows me to enjoy my morning coffee without worry.',
      condition: 'Temperature Sensitivity'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      age: 42,
      location: 'Chicago, IL',
      image: '/assets/testimonial-3.svg',
      rating: 5,
      text: 'My dentist recommended Medident and I couldn\'t be happier. The relief was noticeable within just a few days.',
      condition: 'General Sensitivity'
    },
    {
      id: 4,
      name: 'David Thompson',
      age: 51,
      location: 'Houston, TX',
      image: '/assets/testimonial-4.svg',
      rating: 5,
      text: 'I was skeptical at first, but Medident truly works. I can eat normally again without constant tooth pain.',
      condition: 'Chronic Sensitivity'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? styles.activeStar : styles.inactiveStar}`}
        aria-hidden="true"
      ></i>
    ));
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>
            Real stories from people who found relief with Medident
          </p>
        </div>

        <div className={styles.testimonialsContainer}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
          </button>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialText}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>"{testimonials[currentTestimonial].text}"</p>
                <div className={styles.rating}>
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>
              
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                  />
                </div>
                <div className={styles.authorDetails}>
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p className={styles.authorLocation}>
                    {testimonials[currentTestimonial].location}
                  </p>
                  <span className={styles.condition}>
                    {testimonials[currentTestimonial].condition}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>

        <div className={styles.testimonialDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentTestimonial ? styles.activeDot : ''}`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Statistics Section */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>94%</div>
              <div className={styles.statLabel}>Customer Satisfaction</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50k+</div>
              <div className={styles.statLabel}>Happy Customers</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>7 Days</div>
              <div className={styles.statLabel}>Average Relief Time</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years of Trust</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;