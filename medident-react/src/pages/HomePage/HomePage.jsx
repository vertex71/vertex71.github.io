import React from 'react';
import styles from './HomePage.module.css';
import HeroSection from './sections/HeroSection';
import ProductShowcase from './sections/ProductShowcase';
import SensitivityQuiz from '../../components/quiz/SensitivityQuiz';
import EducationSection from './sections/EducationSection';
import TestimonialsSection from './sections/TestimonialsSection';
import AboutSection from './sections/AboutSection';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <ProductShowcase />
      <SensitivityQuiz />
      <EducationSection />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;