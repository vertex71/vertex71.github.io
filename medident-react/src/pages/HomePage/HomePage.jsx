import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleQuizOption = (value) => {
    setQuizAnswers({ ...quizAnswers, [currentQuestion]: value });
    
    if (currentQuestion < 3) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getQuizResult = () => {
    const yesCount = Object.values(quizAnswers).filter(answer => answer === 'yes').length;
    
    if (yesCount >= 2) {
      return {
        level: 'high',
        title: 'High Sensitivity',
        text: 'You likely have moderate to severe tooth sensitivity. Medident Sensitive Care can provide immediate relief and long-term protection.',
        color: '#E74C3C'
      };
    } else if (yesCount === 1) {
      return {
        level: 'moderate',
        title: 'Mild Sensitivity',
        text: 'You may experience occasional sensitivity. Medident can help prevent symptoms from worsening.',
        color: '#F39C12'
      };
    } else {
      return {
        level: 'low',
        title: 'Low Sensitivity',
        text: 'Great! You have minimal sensitivity, but Medident can help maintain your oral health.',
        color: '#27AE60'
      };
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Advanced Sensitivity Protection for Every Smile</h1>
              <p className="hero-subtitle">Local excellence in dental care. Made in Bangladesh with pride for Bangladeshi families.</p>
              <div className="hero-badges">
                <span className="badge local-badge">
                  <i className="fas fa-flag"></i>
                  Made in Bangladesh
                </span>
                <span className="badge quality-badge">
                  <i className="fas fa-award"></i>
                  International Quality
                </span>
              </div>
              <div className="hero-buttons">
                <a href="#products" className="btn btn-primary">Shop Now</a>
                <a href="#sensitivity" className="btn btn-secondary">Learn About Sensitivity</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/assets/medident-hero-product.svg" alt="Medident Toothpaste" className="product-image" />
              <div className="floating-elements">
                <div className="float-element tooth">
                  <i className="fas fa-tooth"></i>
                </div>
                <div className="float-element shield">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="float-element sparkle">
                  <i className="fas fa-sparkles"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="product-showcase">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">Advanced dental care solutions for sensitive teeth</p>
          </div>
          
          <div className="product-carousel">
            <div className="product-card active">
              <div className="product-image">
                <img src="/assets/medident-sensitive-care.svg" alt="Medident Sensitive Care" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Medident Sensitive Care</h3>
                <p className="product-description">Advanced formula for immediate and lasting relief from tooth sensitivity</p>
                <ul className="product-benefits">
                  <li><i className="fas fa-check"></i> 24/7 Protection</li>
                  <li><i className="fas fa-check"></i> Clinically Proven</li>
                  <li><i className="fas fa-check"></i> Fresh Mint Flavor</li>
                  <li><i className="fas fa-check"></i> Strengthens Enamel</li>
                </ul>
                <div className="product-price">৳85 <span className="original-price">৳95</span></div>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensitivity Quiz Section */}
      <section id="sensitivity" className="sensitivity-quiz">
        <div className="container">
          <div className="quiz-container">
            <div className="quiz-header">
              <h2>Do You Have Sensitive Teeth?</h2>
              <p>Take our quick assessment to find out if Medident is right for you</p>
            </div>
            
            <div className="quiz-content">
              {!showResult && (
                <>
                  {currentQuestion === 1 && (
                    <div className="quiz-question active">
                      <h3>Do you experience sharp pain when eating ice cream or drinking hot beverages?</h3>
                      <div className="quiz-options">
                        <button className="quiz-option" onClick={() => handleQuizOption('yes')}>Yes, frequently</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('sometimes')}>Sometimes</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('no')}>Never</button>
                      </div>
                    </div>
                  )}
                  
                  {currentQuestion === 2 && (
                    <div className="quiz-question active">
                      <h3>Do you avoid certain foods because they cause tooth discomfort?</h3>
                      <div className="quiz-options">
                        <button className="quiz-option" onClick={() => handleQuizOption('yes')}>Yes, often</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('sometimes')}>Occasionally</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('no')}>No, never</button>
                      </div>
                    </div>
                  )}
                  
                  {currentQuestion === 3 && (
                    <div className="quiz-question active">
                      <h3>Does brushing your teeth sometimes cause discomfort?</h3>
                      <div className="quiz-options">
                        <button className="quiz-option" onClick={() => handleQuizOption('yes')}>Yes, it's painful</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('sometimes')}>Sometimes sensitive</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('no')}>No discomfort</button>
                      </div>
                    </div>
                  )}
                </>
              )}
              
              {showResult && (
                <div className="quiz-result">
                  <div className="result-content">
                    <h3>Your Result</h3>
                    <div className="result-text" style={{ color: getQuizResult().color }}>
                      <h4>{getQuizResult().title}</h4>
                      <p>{getQuizResult().text}</p>
                    </div>
                    <div className="result-recommendation">
                      <p>Based on your answers, we recommend:</p>
                      <div className="recommended-product">
                        <img src="/assets/medident-sensitive-care.svg" alt="Medident Sensitive Care" />
                        <div className="product-details">
                          <h4>Medident Sensitive Care</h4>
                          <p>Specially formulated for sensitive teeth protection</p>
                          <button className="btn btn-primary">Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Understanding Tooth Sensitivity</h2>
            <p className="section-subtitle">Learn about causes, prevention, and treatment</p>
          </div>
          
          <div className="education-grid">
            <div className="education-card">
              <div className="card-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>What Causes Sensitivity?</h3>
              <p>Tooth sensitivity occurs when the tooth's enamel wears down, exposing the underlying dentin and nerve endings.</p>
              <a href="#learn-more" className="learn-more">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            
            <div className="education-card">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Prevention Tips</h3>
              <p>Use a soft-bristled toothbrush, avoid acidic foods, and choose toothpaste specifically designed for sensitive teeth.</p>
              <a href="#prevention" className="learn-more">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            
            <div className="education-card">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Treatment Options</h3>
              <p>Regular use of sensitivity toothpaste like Medident can provide relief and long-term protection.</p>
              <a href="#treatment" className="learn-more">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real experiences from real people</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>"I've been using Medident for 6 months now, and my sensitivity issues are completely gone. Great local product!"</p>
              </div>
              <div className="testimonial-author">
                <img src="/assets/customers/customer-1.svg" alt="Customer" className="author-image" />
                <div className="author-info">
                  <h4>Rashida Begum</h4>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>"Finally, a Bangladeshi toothpaste that works as well as international brands. Proud to support local business."</p>
              </div>
              <div className="testimonial-author">
                <img src="/assets/customers/customer-2.svg" alt="Customer" className="author-image" />
                <div className="author-info">
                  <h4>Karim Ahmed</h4>
                  <span>Chittagong, Bangladesh</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>"My dentist recommended Medident, and I can now enjoy cold drinks without pain. Excellent value for money."</p>
              </div>
              <div className="testimonial-author">
                <img src="/assets/customers/customer-3.svg" alt="Customer" className="author-image" />
                <div className="author-info">
                  <h4>Dr. Fatima Khan</h4>
                  <span>Sylhet, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Vertex International</h2>
              <p className="about-intro">Committed to providing world-class dental care products made right here in Bangladesh.</p>
              
              <div className="about-features">
                <div className="feature">
                  <i className="fas fa-flask"></i>
                  <div className="feature-content">
                    <h3>Scientific Research</h3>
                    <p>Our products are developed using the latest dental research and clinical studies.</p>
                  </div>
                </div>
                
                <div className="feature">
                  <i className="fas fa-medal"></i>
                  <div className="feature-content">
                    <h3>Quality Assurance</h3>
                    <p>International quality standards with local manufacturing excellence.</p>
                  </div>
                </div>
                
                <div className="feature">
                  <i className="fas fa-heart"></i>
                  <div className="feature-content">
                    <h3>Local Pride</h3>
                    <p>Supporting Bangladesh's economy while providing superior dental care.</p>
                  </div>
                </div>
              </div>
              
              <div className="cta-section">
                <h3>Ready to try Medident?</h3>
                <p>Join thousands of satisfied customers who trust Medident for their dental care needs.</p>
                <button className="btn btn-primary btn-large">Shop Now</button>
              </div>
            </div>
            
            <div className="about-image">
              <img src="/assets/company/about-manufacturing.svg" alt="Manufacturing Facility" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Made in Bangladesh</h4>
                  <p>State-of-the-art manufacturing facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Have questions about our products? We're here to help!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Address</h4>
                    <p>House-10, Road-5, Block-B<br />Rampura, Banasree<br />Dhaka-1219, Bangladesh</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>+880 1328990900</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>sales.vertex23@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form className="form">
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-input" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-input" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <textarea className="form-input" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;