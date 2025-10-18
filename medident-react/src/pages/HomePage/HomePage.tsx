import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { ProductBenefits } from './sections/ProductBenefits/product-benefits.exports';
import {
  HERO_SLIDES,
  PRODUCT_SHOWCASE,
  SENSITIVITY_QUIZ,
  EDUCATION_SECTION,
  HOME_PAGE_TESTIMONIALS,
  VERTEX_ABOUT_SECTION,
  HOME_PAGE_CONTACT,
  IMAGE_MODAL
} from '../../common';
import './HomePage.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  
  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Image modal state
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Product variant state

  const heroSlides = [
    {
      id: 1,
      title: HERO_SLIDES.SLIDE_1.TITLE,
      subtitle: HERO_SLIDES.SLIDE_1.SUBTITLE,
      description: HERO_SLIDES.SLIDE_1.DESCRIPTION,
      primaryCTA: HERO_SLIDES.SLIDE_1.PRIMARY_CTA,
      secondaryCTA: HERO_SLIDES.SLIDE_1.SECONDARY_CTA,
      backgroundClass: HERO_SLIDES.SLIDE_1.BACKGROUND_CLASS,
      productImage: HERO_SLIDES.SLIDE_1.PRODUCT_IMAGE,
      badge: HERO_SLIDES.SLIDE_1.BADGE,
    },
    {
      id: 2,
      title: HERO_SLIDES.SLIDE_2.TITLE,
      subtitle: HERO_SLIDES.SLIDE_2.SUBTITLE,
      description: HERO_SLIDES.SLIDE_2.DESCRIPTION,
      primaryCTA: HERO_SLIDES.SLIDE_2.PRIMARY_CTA,
      secondaryCTA: HERO_SLIDES.SLIDE_2.SECONDARY_CTA,
      backgroundClass: HERO_SLIDES.SLIDE_2.BACKGROUND_CLASS,
      productImage: HERO_SLIDES.SLIDE_2.PRODUCT_IMAGE,
      badge: HERO_SLIDES.SLIDE_2.BADGE,
    },
    {
      id: 3,
      title: HERO_SLIDES.SLIDE_3.TITLE,
      subtitle: HERO_SLIDES.SLIDE_3.SUBTITLE,
      description: HERO_SLIDES.SLIDE_3.DESCRIPTION,
      primaryCTA: HERO_SLIDES.SLIDE_3.PRIMARY_CTA,
      secondaryCTA: HERO_SLIDES.SLIDE_3.SECONDARY_CTA,
      backgroundClass: HERO_SLIDES.SLIDE_3.BACKGROUND_CLASS,
      productImage: HERO_SLIDES.SLIDE_3.PRODUCT_IMAGE,
      badge: HERO_SLIDES.SLIDE_3.BADGE,
    }
  ];

  // Product variants data
  const productVariants = {
    'sensitive-care': [
      { size: '100g', price: 120, originalPrice: 135, discount: '11%' },
      { size: '40g', price: 50, originalPrice: 55, discount: '9%' },
      { size: '140g', price: 150, originalPrice: 170, discount: '12%' }
    ],
    'gum-care': [
      { size: '100g', price: 120, originalPrice: 135, discount: '11%' },
      { size: '40g', price: 50, originalPrice: 55, discount: '9%' },
      { size: '140g', price: 150, originalPrice: 170, discount: '12%' }
    ]
  };

  // Product image galleries
  const productImageGalleries = {
    'sensitive-care': [
      '/assets/medident-4.png',
      '/assets/medident-sensetive-care.jpeg',
      '/assets/medident-4.png'
    ],
    'gum-care': [
      '/assets/medident-5.png',
      '/assets/medident-g.jpeg',
      '/assets/medident-5.png'
    ]
  };

  // Image modal functions
  const openImageModal = (productType, imageIndex = 0) => {
    setCurrentImageIndex(imageIndex);
    setZoomLevel(1);
    setShowImageModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setZoomLevel(1);
    document.body.style.overflow = 'unset';
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3)); // Max zoom 3x
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5)); // Min zoom 0.5x
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const getCurrentImages = () => {
    const currentProduct = currentImageIndex < 3 ? 'sensitive-care' : 'gum-care';
    return productImageGalleries[currentProduct] || [];
  };

  const getAdjustedIndex = () => {
    return currentImageIndex < 3 ? currentImageIndex : currentImageIndex - 3;
  };

  const nextImage = () => {
    const currentImages = getCurrentImages();
    const adjustedIndex = getAdjustedIndex();
    const newIndex = (adjustedIndex + 1) % currentImages.length;
    const baseIndex = currentImageIndex < 3 ? 0 : 3;
    setCurrentImageIndex(baseIndex + newIndex);
  };

  const prevImage = () => {
    const currentImages = getCurrentImages();
    const adjustedIndex = getAdjustedIndex();
    const newIndex = adjustedIndex === 0 ? currentImages.length - 1 : adjustedIndex - 1;
    const baseIndex = currentImageIndex < 3 ? 0 : 3;
    setCurrentImageIndex(baseIndex + newIndex);
  };


  // Add to cart function
  const handleQuickAddToCart = (productType) => {
    const productInfo = {
      'sensitive-care': {
        id: 'sensitive-care',
        name: 'Medident Sensitive Care',
        category: 'Sensitivity Relief',
        image: '/assets/medident-4.png'
      },
      'gum-care': {
        id: 'gum-care',
        name: 'Medident-G Gum Care',
        category: 'Gum Health',
        image: '/assets/medident-5.png'
      }
    };

    const product = productInfo[productType];
    const variant = productVariants[productType][0]; // Always use 100g variant (index 0)

    addToCart(product, variant, 1);
    
    // Navigate to cart page
    navigate('/cart');
  };

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
            <h2 className="section-title">{PRODUCT_SHOWCASE.SECTION.TITLE}</h2>
            <p className="section-subtitle">{PRODUCT_SHOWCASE.SECTION.SUBTITLE}</p>
          </div>
          
          <div className="products-grid">
            {/* Sensitive Care Product */}
            <div className="product-card" id="sensitive-care">
              <div className="product-badge">
                <span className="badge featured">{PRODUCT_SHOWCASE.SENSITIVE_CARE.BADGE}</span>
              </div>
              <div className="product-image" onClick={() => openImageModal('sensitive-care', 0)}>
                <img src={PRODUCT_SHOWCASE.SENSITIVE_CARE.IMAGE} alt={PRODUCT_SHOWCASE.SENSITIVE_CARE.ALT_TEXT} />
              </div>
              <div className="product-info">
                <div className="product-category">{PRODUCT_SHOWCASE.SENSITIVE_CARE.CATEGORY}</div>
                <h3 className="product-name">
                  {PRODUCT_SHOWCASE.SENSITIVE_CARE.NAME}
                </h3>
                <p className="product-description">{PRODUCT_SHOWCASE.SENSITIVE_CARE.DESCRIPTION}</p>
                <ul className="product-benefits">
                  <li><i className="fas fa-shield-alt"></i> {PRODUCT_SHOWCASE.SENSITIVE_CARE.BENEFITS.PROTECTION_24_7}</li>
                  <li><i className="fas fa-check-circle"></i> {PRODUCT_SHOWCASE.SENSITIVE_CARE.BENEFITS.CLINICALLY_PROVEN}</li>
                  <li><i className="fas fa-leaf"></i> {PRODUCT_SHOWCASE.SENSITIVE_CARE.BENEFITS.FRESH_MINT}</li>
                  <li><i className="fas fa-tooth"></i> {PRODUCT_SHOWCASE.SENSITIVE_CARE.BENEFITS.STRENGTHENS_ENAMEL}</li>
                </ul>
                
                <div className="product-price-summary">
                  <div className="price">৳120</div>
                  <div className="price-info">
                    <span className="original-price">was ৳135</span>
                    <span className="savings">Save 11%</span>
                  </div>
                  <div className="size-info">100g tube</div>
                </div>
                <div className="product-actions">
                  <button className="btn btn-primary btn-full" onClick={() => handleQuickAddToCart('sensitive-care')}>
                    <i className="fas fa-shopping-cart"></i>
                    {PRODUCT_SHOWCASE.SENSITIVE_CARE.BUTTONS.ADD_TO_CART}
                  </button>
                  <button className="btn btn-secondary btn-outline" onClick={() => navigate('/product-details/sensitive-care')}>
                    {PRODUCT_SHOWCASE.SENSITIVE_CARE.BUTTONS.VIEW_DETAILS}
                  </button>
                </div>
              </div>
            </div>

            {/* Gum Care Product */}
            <div className="product-card" id="gum-care">
              <div className="product-badge">
                <span className="badge new">{PRODUCT_SHOWCASE.GUM_CARE.BADGE}</span>
              </div>
              <div className="product-image" onClick={() => openImageModal('gum-care', 3)}>
                <img src={PRODUCT_SHOWCASE.GUM_CARE.IMAGE} alt={PRODUCT_SHOWCASE.GUM_CARE.ALT_TEXT} />
              </div>
              <div className="product-info">
                <div className="product-category">{PRODUCT_SHOWCASE.GUM_CARE.CATEGORY}</div>
                <h3 className="product-name">
                  {PRODUCT_SHOWCASE.GUM_CARE.NAME}
                </h3>
                <p className="product-description">{PRODUCT_SHOWCASE.GUM_CARE.DESCRIPTION}</p>
                <ul className="product-benefits">
                  <li><i className="fas fa-heart"></i> {PRODUCT_SHOWCASE.GUM_CARE.BENEFITS.GUM_PROTECTION}</li>
                  <li><i className="fas fa-shield-alt"></i> {PRODUCT_SHOWCASE.GUM_CARE.BENEFITS.ANTI_BACTERIAL}</li>
                  <li><i className="fas fa-droplet"></i> {PRODUCT_SHOWCASE.GUM_CARE.BENEFITS.PREVENTS_BLEEDING}</li>
                  <li><i className="fas fa-leaf"></i> {PRODUCT_SHOWCASE.GUM_CARE.BENEFITS.NATURAL_EXTRACTS}</li>
                </ul>
                
                <div className="product-price-summary">
                  <div className="price">৳120</div>
                  <div className="price-info">
                    <span className="original-price">was ৳135</span>
                    <span className="savings">Save 11%</span>
                  </div>
                  <div className="size-info">100g tube</div>
                </div>
                <div className="product-actions">
                  <button className="btn btn-primary btn-full" onClick={() => handleQuickAddToCart('gum-care')}>
                    <i className="fas fa-shopping-cart"></i>
                    {PRODUCT_SHOWCASE.GUM_CARE.BUTTONS.ADD_TO_CART}
                  </button>
                  <button className="btn btn-secondary btn-outline" onClick={() => navigate('/product-details/gum-care')}>
                    {PRODUCT_SHOWCASE.GUM_CARE.BUTTONS.VIEW_DETAILS}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Comparison Section */}
          <div className="product-comparison" id="compare">
            <h3>{PRODUCT_SHOWCASE.COMPARISON.TITLE}</h3>
            <div className="comparison-options">
              <button className="btn btn-secondary">
                <i className="fas fa-balance-scale"></i>
                {PRODUCT_SHOWCASE.COMPARISON.BUTTONS.COMPARE_PRODUCTS}
              </button>
              <button className="btn btn-primary">
                <i className="fas fa-search"></i>
                {PRODUCT_SHOWCASE.COMPARISON.BUTTONS.TAKE_QUIZ}
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
              <h2>{SENSITIVITY_QUIZ.HEADER.TITLE}</h2>
              <p>{SENSITIVITY_QUIZ.HEADER.SUBTITLE}</p>
            </div>
            
            <div className="quiz-content">
              {!showResult && (
                <>
                  {currentQuestion === 1 && (
                    <div className="quiz-question active">
                      <h3>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_1.TEXT}</h3>
                      <div className="quiz-options">
                        <button className="quiz-option" onClick={() => handleQuizOption('yes')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_1.OPTIONS.YES}</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('sometimes')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_1.OPTIONS.SOMETIMES}</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('no')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_1.OPTIONS.NO}</button>
                      </div>
                    </div>
                  )}

                  {currentQuestion === 2 && (
                    <div className="quiz-question active">
                      <h3>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_2.TEXT}</h3>
                      <div className="quiz-options">
                        <button className="quiz-option" onClick={() => handleQuizOption('yes')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_2.OPTIONS.YES}</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('sometimes')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_2.OPTIONS.SOMETIMES}</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('no')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_2.OPTIONS.NO}</button>
                      </div>
                    </div>
                  )}

                  {currentQuestion === 3 && (
                    <div className="quiz-question active">
                      <h3>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_3.TEXT}</h3>
                      <div className="quiz-options">
                        <button className="quiz-option" onClick={() => handleQuizOption('yes')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_3.OPTIONS.YES}</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('sometimes')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_3.OPTIONS.SOMETIMES}</button>
                        <button className="quiz-option" onClick={() => handleQuizOption('no')}>{SENSITIVITY_QUIZ.QUESTIONS.QUESTION_3.OPTIONS.NO}</button>
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

      <ProductBenefits />

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{EDUCATION_SECTION.HEADER.TITLE}</h2>
            <p className="section-subtitle">{EDUCATION_SECTION.HEADER.SUBTITLE}</p>
          </div>

          <div className="education-grid">
            {EDUCATION_SECTION.EDUCATION_CARDS.map((card, index) => (
              <div key={index} className="education-card">
                <div className="card-icon">
                  <i className={card.ICON}></i>
                </div>
                <h3>{card.TITLE}</h3>
                <p>{card.DESCRIPTION}</p>
                <a href={card.LINK_HREF} className="learn-more">{card.LINK_TEXT} <i className="fas fa-arrow-right"></i></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{HOME_PAGE_TESTIMONIALS.HEADER.TITLE}</h2>
            <p className="section-subtitle">{HOME_PAGE_TESTIMONIALS.HEADER.SUBTITLE}</p>
          </div>

          <div className="testimonials-grid">
            {HOME_PAGE_TESTIMONIALS.TESTIMONIALS_LIST.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.RATING)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p>"{testimonial.TEXT}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.IMAGE} alt="Customer" className="author-image" />
                  <div className="author-info">
                    <h4>{testimonial.NAME}</h4>
                    <span>{testimonial.LOCATION}</span>
                  </div>
                </div>
              </div>
            ))}
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
                  {VERTEX_ABOUT_SECTION.COMPANY_INTRO.PARAGRAPH_1}
                </p>

                <p>
                  {VERTEX_ABOUT_SECTION.COMPANY_INTRO.PARAGRAPH_2}
                </p>

                <p>
                  {VERTEX_ABOUT_SECTION.COMPANY_INTRO.PARAGRAPH_3}
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
            <h3 className="values-title">{VERTEX_ABOUT_SECTION.CORE_VALUES.TITLE}</h3>
            <div className="values-grid">
              {VERTEX_ABOUT_SECTION.CORE_VALUES.VALUES.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <i className={value.ICON}></i>
                  </div>
                  <h4>{value.TITLE}</h4>
                  <p>{value.DESCRIPTION}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Mission & Vision */}
          <div className="mission-vision">
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="card-header">
                  <i className={VERTEX_ABOUT_SECTION.MISSION_VISION.MISSION.ICON}></i>
                  <h3>{VERTEX_ABOUT_SECTION.MISSION_VISION.MISSION.TITLE}</h3>
                </div>
                <p>{VERTEX_ABOUT_SECTION.MISSION_VISION.MISSION.TEXT}</p>
              </div>

              <div className="vision-card">
                <div className="card-header">
                  <i className={VERTEX_ABOUT_SECTION.MISSION_VISION.VISION.ICON}></i>
                  <h3>{VERTEX_ABOUT_SECTION.MISSION_VISION.VISION.TITLE}</h3>
                </div>
                <p>{VERTEX_ABOUT_SECTION.MISSION_VISION.VISION.TEXT}</p>
              </div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div id="quality" className="certifications">
            <h3 className="certifications-title">{VERTEX_ABOUT_SECTION.CERTIFICATIONS.TITLE}</h3>
            <div className="certifications-grid">
              {VERTEX_ABOUT_SECTION.CERTIFICATIONS.ITEMS.map((cert, index) => (
                <div key={index} className="cert-item">
                  <i className={cert.ICON}></i>
                  <div className="cert-info">
                    <h4>{cert.TITLE}</h4>
                    <p>{cert.DESCRIPTION}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Responsibility */}
          <div className="social-responsibility">
            <div className="social-content">
              <div className="social-text">
                <h3>{VERTEX_ABOUT_SECTION.SOCIAL_RESPONSIBILITY.TITLE}</h3>
                <p>{VERTEX_ABOUT_SECTION.SOCIAL_RESPONSIBILITY.INTRO}</p>
                <ul className="responsibility-list">
                  {VERTEX_ABOUT_SECTION.SOCIAL_RESPONSIBILITY.INITIATIVES.map((initiative, index) => (
                    <li key={index}>
                      <i className={initiative.ICON}></i>
                      <span><strong>{initiative.TITLE}:</strong> {initiative.DESCRIPTION}</span>
                    </li>
                  ))}
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
              <h2>{HOME_PAGE_CONTACT.HEADER.TITLE}</h2>
              <p>{HOME_PAGE_CONTACT.HEADER.SUBTITLE}</p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className={HOME_PAGE_CONTACT.CONTACT_DETAILS.ADDRESS.ICON}></i>
                  <div>
                    <h4>{HOME_PAGE_CONTACT.CONTACT_DETAILS.ADDRESS.LABEL}</h4>
                    <p>{HOME_PAGE_CONTACT.CONTACT_DETAILS.ADDRESS.TEXT_LINE_1}<br />{HOME_PAGE_CONTACT.CONTACT_DETAILS.ADDRESS.TEXT_LINE_2}<br />{HOME_PAGE_CONTACT.CONTACT_DETAILS.ADDRESS.TEXT_LINE_3}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className={HOME_PAGE_CONTACT.CONTACT_DETAILS.PHONE.ICON}></i>
                  <div>
                    <h4>{HOME_PAGE_CONTACT.CONTACT_DETAILS.PHONE.LABEL}</h4>
                    <p>{HOME_PAGE_CONTACT.CONTACT_DETAILS.PHONE.TEXT}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className={HOME_PAGE_CONTACT.CONTACT_DETAILS.EMAIL.ICON}></i>
                  <div>
                    <h4>{HOME_PAGE_CONTACT.CONTACT_DETAILS.EMAIL.LABEL}</h4>
                    <p>{HOME_PAGE_CONTACT.CONTACT_DETAILS.EMAIL.TEXT}</p>
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
                  <textarea className="form-input" rows={5} placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal} aria-label={IMAGE_MODAL.BUTTONS.CLOSE.ARIA_LABEL}>
              <i className={IMAGE_MODAL.BUTTONS.CLOSE.ICON}></i>
            </button>

            <div className="image-container">
              <img
                src={getCurrentImages()[getAdjustedIndex()]}
                alt={IMAGE_MODAL.ALT_TEXT}
                style={{ transform: `scale(${zoomLevel})` }}
                className="modal-image"
              />
            </div>

            <div className="image-controls">
              <div className="zoom-controls">
                <button className="control-btn" onClick={zoomOut} disabled={zoomLevel <= 0.5} aria-label={IMAGE_MODAL.BUTTONS.ZOOM_OUT.ARIA_LABEL}>
                  <i className={IMAGE_MODAL.BUTTONS.ZOOM_OUT.ICON}></i>
                </button>
                <button className="control-btn reset-btn" onClick={resetZoom} aria-label={IMAGE_MODAL.BUTTONS.ZOOM_RESET.ARIA_LABEL}>
                  <i className={IMAGE_MODAL.BUTTONS.ZOOM_RESET.ICON}></i>
                </button>
                <button className="control-btn" onClick={zoomIn} disabled={zoomLevel >= 3} aria-label={IMAGE_MODAL.BUTTONS.ZOOM_IN.ARIA_LABEL}>
                  <i className={IMAGE_MODAL.BUTTONS.ZOOM_IN.ICON}></i>
                </button>
              </div>

              <div className="navigation-controls">
                <button className="nav-control prev" onClick={prevImage} aria-label={IMAGE_MODAL.BUTTONS.PREV_IMAGE.ARIA_LABEL}>
                  <i className={IMAGE_MODAL.BUTTONS.PREV_IMAGE.ICON}></i>
                </button>
                <span className="image-counter">
                  {getAdjustedIndex() + 1} / {getCurrentImages().length}
                </span>
                <button className="nav-control next" onClick={nextImage} aria-label={IMAGE_MODAL.BUTTONS.NEXT_IMAGE.ARIA_LABEL}>
                  <i className={IMAGE_MODAL.BUTTONS.NEXT_IMAGE.ICON}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;