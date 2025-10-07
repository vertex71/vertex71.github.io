import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  
  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      id: 1,
      title: "Say Goodbye to Tooth Sensitivity",
      subtitle: "Enjoy your favorite hot and cold foods again with Medident Sensitive Care",
      description: "Clinically proven formula provides 24/7 protection from tooth sensitivity",
      primaryCTA: "Shop Sensitive Care",
      secondaryCTA: "Learn More",
      backgroundClass: "slide-sensitivity",
      productImage: "/assets/medident-sensetive-care.jpeg",
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Healthy Gums, Confident Smile",
      subtitle: "Advanced gum protection with Medident-G Gum Care toothpaste",
      description: "Anti-bacterial formula prevents bleeding and strengthens gums naturally",
      primaryCTA: "Shop Gum Care",
      secondaryCTA: "Learn More",
      backgroundClass: "slide-gum-care",
      productImage: "/assets/medident-g.jpeg",
      badge: "New Formula"
    },
    {
      id: 3,
      title: "Complete Oral Care Solutions",
      subtitle: "From sensitivity relief to gum protection - Made in Bangladesh with pride",
      description: "Choose the perfect solution for your oral health needs",
      primaryCTA: "Shop All Products",
      secondaryCTA: "Take Product Quiz",
      backgroundClass: "slide-complete",
      productImage: "/assets/medident-sensetive-care.jpeg",
      badge: "Made in Bangladesh"
    }
  ];

  // Auto-play slider
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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
      {/* Hero Slider Section */}
      <section id="home" className="hero-slider">
        <div className="slider-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''} ${slide.backgroundClass}`}
            >
              <div className="hero-container">
                <div className="hero-content">
                  <div className="hero-text">
                    <div className="slide-badge">
                      <span className="badge">{slide.badge}</span>
                    </div>
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <p className="hero-description">{slide.description}</p>
                    <div className="hero-buttons">
                      <a href="#products" className="btn btn-primary btn-large">
                        {slide.primaryCTA}
                      </a>
                      <a href="#sensitivity" className="btn btn-secondary btn-large">
                        {slide.secondaryCTA}
                      </a>
                    </div>
                  </div>
                  <div className="hero-image">
                    <img 
                      src={slide.productImage} 
                      alt={slide.title} 
                      className="product-image" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Navigation */}
          <div className="slider-nav">
            <button 
              className="nav-btn prev-btn" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="nav-btn next-btn" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Slider Dots */}
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="product-showcase">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Complete Oral Care Range</h2>
            <p className="section-subtitle">Choose the perfect solution for your oral health needs</p>
          </div>
          
          <div className="products-grid">
            {/* Sensitive Care Product */}
            <div className="product-card" id="sensitive-care">
              <div className="product-badge">
                <span className="badge featured">Most Popular</span>
              </div>
              <div className="product-image">
                <img src="/assets/medident-sensetive-care.jpeg" alt="Medident Sensitive Care" />
              </div>
              <div className="product-info">
                <div className="product-category">Sensitivity Relief</div>
                <h3 className="product-name">Medident Sensitive Care</h3>
                <p className="product-description">Advanced formula for immediate and lasting relief from tooth sensitivity</p>
                <ul className="product-benefits">
                  <li><i className="fas fa-shield-alt"></i> 24/7 Protection</li>
                  <li><i className="fas fa-check-circle"></i> Clinically Proven</li>
                  <li><i className="fas fa-leaf"></i> Fresh Mint Flavor</li>
                  <li><i className="fas fa-tooth"></i> Strengthens Enamel</li>
                </ul>
                <div className="product-price">
                  <span className="price">৳85</span>
                  <span className="original-price">৳95</span>
                  <span className="discount">Save 11%</span>
                </div>
                <div className="product-actions">
                  <button className="btn btn-primary btn-full">Add to Cart</button>
                  <button className="btn btn-secondary btn-outline">Learn More</button>
                </div>
              </div>
            </div>

            {/* Gum Care Product */}
            <div className="product-card" id="gum-care">
              <div className="product-badge">
                <span className="badge new">New Formula</span>
              </div>
              <div className="product-image">
                <img src="/assets/medident-g.jpeg" alt="Medident-G Gum Care" />
              </div>
              <div className="product-info">
                <div className="product-category">Gum Health</div>
                <h3 className="product-name">Medident-G Gum Care</h3>
                <p className="product-description">Advanced gum protection formula for healthy gums and fresh breath</p>
                <ul className="product-benefits">
                  <li><i className="fas fa-heart"></i> Gum Protection</li>
                  <li><i className="fas fa-shield-alt"></i> Anti-bacterial</li>
                  <li><i className="fas fa-droplet"></i> Prevents Bleeding</li>
                  <li><i className="fas fa-leaf"></i> Natural Extracts</li>
                </ul>
                <div className="product-price">
                  <span className="price">৳90</span>
                  <span className="original-price">৳100</span>
                  <span className="discount">Save 10%</span>
                </div>
                <div className="product-actions">
                  <button className="btn btn-primary btn-full">Add to Cart</button>
                  <button className="btn btn-secondary btn-outline">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Comparison Section */}
          <div className="product-comparison" id="compare">
            <h3>Not sure which product is right for you?</h3>
            <div className="comparison-options">
              <button className="btn btn-secondary">
                <i className="fas fa-balance-scale"></i>
                Compare Products
              </button>
              <button className="btn btn-primary">
                <i className="fas fa-search"></i>
                Take Product Quiz
              </button>
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
                        <img src="/assets/medident-sensetive-care.jpeg" alt="Medident Sensitive Care" />
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
          {/* Company Overview */}
          <div className="about-content">
            <div className="about-text">
              <div className="section-header">
                <h2 className="section-title">About VERTEX International</h2>
                <p className="section-subtitle">Leading the future of oral care in Bangladesh since 2008</p>
              </div>
              
              <div className="about-description">
                <p className="about-intro">
                  VERTEX International is a pioneering pharmaceutical and healthcare company based in Bangladesh, 
                  dedicated to improving oral health through innovative, scientifically-backed products. 
                  Since our establishment in 2008, we have been at the forefront of dental care innovation, 
                  developing specialized solutions that meet the unique needs of Bangladeshi families.
                </p>
                
                <p>
                  Our flagship brand, Medident, represents our commitment to excellence in oral care. 
                  We understand that oral health is fundamental to overall well-being, which is why we've 
                  invested extensively in research and development to create products that provide real, 
                  measurable benefits to our customers.
                </p>
                
                <p>
                  As a proud Bangladeshi company, we believe in supporting local communities while 
                  maintaining international quality standards. Our state-of-the-art manufacturing 
                  facility employs cutting-edge technology and adheres to strict quality control 
                  measures to ensure every product meets the highest standards of safety and efficacy.
                </p>
              </div>
            </div>
            
            <div className="about-image">
              <img src="/assets/company/about-manufacturing.svg" alt="VERTEX International Manufacturing Facility" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Made in Bangladesh</h4>
                  <p>ISO 9001:2015 Certified Manufacturing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Statistics */}
          <div className="company-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years of Excellence</div>
                <div className="stat-description">Serving Bangladesh since 2008</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50M+</div>
                <div className="stat-label">Products Sold</div>
                <div className="stat-description">Trusted by millions nationwide</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Retail Partners</div>
                <div className="stat-description">Available across Bangladesh</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Customer Satisfaction</div>
                <div className="stat-description">Based on customer surveys</div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="core-values">
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-microscope"></i>
                </div>
                <h4>Innovation</h4>
                <p>Continuously researching and developing new formulations to address evolving oral health needs.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Quality</h4>
                <p>Maintaining the highest standards in manufacturing, testing, and quality assurance processes.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Care</h4>
                <p>Putting customer health and satisfaction at the center of everything we do.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-flag"></i>
                </div>
                <h4>Local Pride</h4>
                <p>Contributing to Bangladesh's economy while serving our local communities with pride.</p>
              </div>
            </div>
          </div>

          {/* Our Mission & Vision */}
          <div className="mission-vision">
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="card-header">
                  <i className="fas fa-bullseye"></i>
                  <h3>Our Mission</h3>
                </div>
                <p>
                  To provide innovative, effective, and affordable oral care solutions that empower 
                  every Bangladeshi family to achieve optimal oral health, while contributing to 
                  the nation's healthcare sector and economic growth.
                </p>
              </div>
              
              <div className="vision-card">
                <div className="card-header">
                  <i className="fas fa-eye"></i>
                  <h3>Our Vision</h3>
                </div>
                <p>
                  To become Bangladesh's most trusted oral care brand and a leading pharmaceutical 
                  company in South Asia, recognized for our commitment to innovation, quality, 
                  and community well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="certifications">
            <h3 className="certifications-title">Certifications & Recognition</h3>
            <div className="certifications-grid">
              <div className="cert-item">
                <i className="fas fa-certificate"></i>
                <div className="cert-info">
                  <h4>ISO 9001:2015</h4>
                  <p>Quality Management System</p>
                </div>
              </div>
              
              <div className="cert-item">
                <i className="fas fa-leaf"></i>
                <div className="cert-info">
                  <h4>ISO 14001:2015</h4>
                  <p>Environmental Management</p>
                </div>
              </div>
              
              <div className="cert-item">
                <i className="fas fa-medkit"></i>
                <div className="cert-info">
                  <h4>BSTI Approved</h4>
                  <p>Bangladesh Standards Certified</p>
                </div>
              </div>
              
              <div className="cert-item">
                <i className="fas fa-award"></i>
                <div className="cert-info">
                  <h4>Best Local Brand</h4>
                  <p>Bangladesh Business Awards 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Responsibility */}
          <div className="social-responsibility">
            <div className="social-content">
              <div className="social-text">
                <h3>Our Social Responsibility</h3>
                <p>
                  At VERTEX International, we believe in giving back to the community that has 
                  supported our growth. Our social responsibility initiatives focus on:
                </p>
                <ul className="responsibility-list">
                  <li>
                    <i className="fas fa-graduation-cap"></i>
                    <span><strong>Oral Health Education:</strong> Free dental awareness programs in schools and communities</span>
                  </li>
                  <li>
                    <i className="fas fa-clinic-medical"></i>
                    <span><strong>Healthcare Support:</strong> Sponsoring dental camps in rural areas</span>
                  </li>
                  <li>
                    <i className="fas fa-seedling"></i>
                    <span><strong>Environmental Care:</strong> Sustainable manufacturing practices and eco-friendly packaging</span>
                  </li>
                  <li>
                    <i className="fas fa-hands-helping"></i>
                    <span><strong>Community Development:</strong> Supporting local employment and skill development</span>
                  </li>
                </ul>
              </div>
              
              <div className="social-image">
                <div className="social-card">
                  <h4>Community Impact</h4>
                  <div className="impact-stats">
                    <div className="impact-item">
                      <span className="impact-number">10,000+</span>
                      <span className="impact-label">Students Educated</span>
                    </div>
                    <div className="impact-item">
                      <span className="impact-number">50+</span>
                      <span className="impact-label">Health Camps</span>
                    </div>
                    <div className="impact-item">
                      <span className="impact-number">200+</span>
                      <span className="impact-label">Jobs Created</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="about-cta">
            <div className="cta-content">
              <h3>Join the VERTEX International Family</h3>
              <p>
                Discover why millions of Bangladeshi families trust our products for their oral health needs. 
                Experience the difference that local innovation and international quality can make.
              </p>
              <div className="cta-buttons">
                <a href="#products" className="btn btn-primary btn-large">
                  <i className="fas fa-shopping-cart"></i>
                  Shop Our Products
                </a>
                <a href="#contact" className="btn btn-secondary btn-large">
                  <i className="fas fa-envelope"></i>
                  Contact Us
                </a>
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