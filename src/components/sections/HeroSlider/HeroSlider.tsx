import React, { useState, useEffect } from 'react';
import styles from './HeroSlider.module.scss';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  backgroundClass: string;
  productImage: string;
  badge: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ 
  slides, 
  autoPlayInterval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className={styles.heroSlider}>
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''} ${styles[slide.backgroundClass]}`}
          >
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <div className={styles.slideBadge}>
                    <span className={styles.badge}>{slide.badge}</span>
                  </div>
                  <h1 className={styles.heroTitle}>{slide.title}</h1>
                  <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                  <p className={styles.heroDescription}>{slide.description}</p>
                  <div className={styles.heroButtons}>
                    <a href="#products" className="btn btn-primary btn-large">
                      {slide.primaryCTA}
                    </a>
                    <a href="#sensitivity" className="btn btn-secondary btn-large">
                      {slide.secondaryCTA}
                    </a>
                  </div>
                </div>
                <div className={styles.heroImage}>
                  <img 
                    src={slide.productImage} 
                    alt={slide.title} 
                    className={styles.productImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.sliderNav}>
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;