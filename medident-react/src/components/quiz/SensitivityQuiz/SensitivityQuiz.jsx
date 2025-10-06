import React, { useState } from 'react';
import styles from './SensitivityQuiz.module.css';
import Button from '../../ui/Button';
import { quizQuestions, quizResults, calculateSensitivityLevel } from '../../../data/quizQuestions';
import { products } from '../../../data/products';
import { useCart } from '../../../context/CartContext';

const SensitivityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const { addItem } = useCart();

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    // Save answer
    const newAnswers = { ...answers, [currentQuestion + 1]: selectedOption };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      // Move to next question
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      // Show results
      const sensitivityLevel = calculateSensitivityLevel(newAnswers);
      setResult(quizResults[sensitivityLevel]);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion] || '');
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption('');
    setShowResult(false);
    setResult(null);
  };

  const handleAddToCart = () => {
    const mainProduct = products[0];
    if (mainProduct) {
      addItem({
        id: mainProduct.id,
        name: mainProduct.name,
        price: mainProduct.price,
        image: mainProduct.images.main,
        quantity: 1
      });
    }
  };

  const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResult && result) {
    return (
      <section id="sensitivity" className={styles.sensitivityQuiz}>
        <div className={styles.container}>
          <div className={styles.quizContainer}>
            <div className={styles.quizResult}>
              <div className={styles.resultContent}>
                <h3>Your Result</h3>
                <div className={`${styles.resultText} ${styles[`result${result.level.charAt(0).toUpperCase() + result.level.slice(1)}`]}`}>
                  <h4 style={{ color: result.color }}>{result.title}</h4>
                  <p>{result.message}</p>
                </div>
                <div className={styles.resultRecommendation}>
                  <p>Based on your answers, we recommend:</p>
                  <div className={styles.recommendedProduct}>
                    <img 
                      src={products[0]?.images?.hero} 
                      alt="Medident Sensitive Care"
                    />
                    <div className={styles.productDetails}>
                      <h4>Medident Sensitive Care</h4>
                      <p>{result.recommendation.message}</p>
                      <Button 
                        variant="primary"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={styles.restartButton}>
                  <Button 
                    variant="secondary" 
                    onClick={handleRestart}
                  >
                    Take Quiz Again
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestionData = quizQuestions[currentQuestion];

  return (
    <section id="sensitivity" className={styles.sensitivityQuiz}>
      <div className={styles.container}>
        <div className={styles.quizContainer}>
          <div className={styles.quizHeader}>
            <h2>Do You Have Sensitive Teeth?</h2>
            <p>Take our quick assessment to find out if Medident is right for you</p>
          </div>
          
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className={styles.progressText}>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </div>
          
          <div className={styles.quizContent}>
            <div className={`${styles.quizQuestion} ${styles.active}`}>
              <h3>{currentQuestionData.question}</h3>
              <div className={styles.quizOptions}>
                {currentQuestionData.options.map((option) => (
                  <button
                    key={option.value}
                    className={`${styles.quizOption} ${selectedOption === option.value ? styles.selected : ''}`}
                    onClick={() => handleOptionSelect(option.value)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.quizNavigation}>
            <Button
              variant="secondary"
              onClick={handlePrevious}
              style={{ 
                visibility: currentQuestion > 0 ? 'visible' : 'hidden' 
              }}
              className={styles.navButton}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={!selectedOption}
              className={styles.navButton}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Get Results' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SensitivityQuiz;