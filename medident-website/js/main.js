// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => {
        n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sensitivity Quiz Functionality
class SensitivityQuiz {
    constructor() {
        this.currentQuestion = 1;
        this.answers = {};
        this.questions = document.querySelectorAll('.quiz-question');
        this.nextBtn = document.querySelector('.quiz-next');
        this.prevBtn = document.querySelector('.quiz-prev');
        this.resultDiv = document.querySelector('.quiz-result');
        
        this.init();
    }

    init() {
        // Add event listeners to quiz options
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectOption(e.target);
            });
        });

        // Navigation buttons
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.prevBtn.addEventListener('click', () => this.prevQuestion());
    }

    selectOption(selectedOption) {
        const question = selectedOption.closest('.quiz-question');
        const questionNum = question.dataset.question;
        
        // Remove previous selections
        question.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selection to current option
        selectedOption.classList.add('selected');
        
        // Store answer
        this.answers[questionNum] = selectedOption.dataset.value;
        
        // Enable next button
        this.nextBtn.disabled = false;
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length) {
            // Hide current question
            this.questions[this.currentQuestion - 1].classList.remove('active');
            
            // Show next question
            this.currentQuestion++;
            this.questions[this.currentQuestion - 1].classList.add('active');
            
            // Show previous button
            this.prevBtn.style.display = 'inline-block';
            
            // Update next button text for last question
            if (this.currentQuestion === this.questions.length) {
                this.nextBtn.textContent = 'Get Results';
            }
        } else {
            // Show results
            this.showResults();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 1) {
            // Hide current question
            this.questions[this.currentQuestion - 1].classList.remove('active');
            
            // Show previous question
            this.currentQuestion--;
            this.questions[this.currentQuestion - 1].classList.add('active');
            
            // Hide previous button if on first question
            if (this.currentQuestion === 1) {
                this.prevBtn.style.display = 'none';
            }
            
            // Reset next button text
            this.nextBtn.textContent = 'Next';
        }
    }

    showResults() {
        // Hide all questions
        this.questions.forEach(q => q.classList.remove('active'));
        
        // Calculate sensitivity level
        const sensitivityLevel = this.calculateSensitivity();
        
        // Show result
        this.displayResult(sensitivityLevel);
        this.resultDiv.style.display = 'block';
        
        // Hide navigation buttons
        document.querySelector('.quiz-navigation').style.display = 'none';
    }

    calculateSensitivity() {
        const yesCount = Object.values(this.answers).filter(answer => answer === 'yes').length;
        const sometimesCount = Object.values(this.answers).filter(answer => answer === 'sometimes').length;
        
        if (yesCount >= 2) {
            return 'high';
        } else if (yesCount === 1 || sometimesCount >= 2) {
            return 'moderate';
        } else {
            return 'low';
        }
    }

    displayResult(level) {
        const resultText = this.resultDiv.querySelector('.result-text');
        let message = '';
        
        switch(level) {
            case 'high':
                message = `
                    <div class="result-high">
                        <h4 style="color: var(--accent-color);">High Sensitivity Detected</h4>
                        <p>Your answers suggest you have significant tooth sensitivity. Medident Sensitive Care can provide immediate relief and long-term protection for your sensitive teeth.</p>
                    </div>
                `;
                break;
            case 'moderate':
                message = `
                    <div class="result-moderate">
                        <h4 style="color: var(--primary-color);">Moderate Sensitivity</h4>
                        <p>You experience some tooth sensitivity. Using Medident Sensitive Care regularly can help prevent sensitivity from worsening and provide protection.</p>
                    </div>
                `;
                break;
            case 'low':
                message = `
                    <div class="result-low">
                        <h4 style="color: var(--secondary-color);">Low Sensitivity</h4>
                        <p>Your teeth show minimal sensitivity. Medident Sensitive Care can help maintain your oral health and prevent future sensitivity issues.</p>
                    </div>
                `;
                break;
        }
        
        resultText.innerHTML = message;
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.sensitivity-quiz')) {
        new SensitivityQuiz();
    }
});

// Product Carousel (if multiple products are added later)
class ProductCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.product-card');
        this.init();
    }

    init() {
        if (this.slides.length > 1) {
            this.createNavigation();
            this.autoPlay();
        }
    }

    createNavigation() {
        const carousel = document.querySelector('.product-carousel');
        const nav = document.createElement('div');
        nav.className = 'carousel-nav';
        
        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            nav.appendChild(dot);
        }
        
        carousel.appendChild(nav);
    }

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        document.querySelectorAll('.carousel-dot')[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        document.querySelectorAll('.carousel-dot')[this.currentSlide].classList.add('active');
    }

    autoPlay() {
        setInterval(() => {
            const nextSlide = (this.currentSlide + 1) % this.slides.length;
            this.goToSlide(nextSlide);
        }, 5000);
    }
}

// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact .form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || this.querySelector('input[type="text"]').value;
            const email = formData.get('email') || this.querySelector('input[type="email"]').value;
            const phone = formData.get('phone') || this.querySelector('input[type="tel"]').value;
            const message = formData.get('message') || this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#58D68D' : type === 'error' ? '#E74C3C' : '#3498DB',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        zIndex: '10000',
        maxWidth: '400px',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll-based animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation styles to elements
    const animatedElements = document.querySelectorAll('.education-card, .testimonial-card, .product-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Search functionality (if needed later)
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // Implement search logic here
            console.log('Searching for:', searchTerm);
        });
    }
}

// Shopping cart functionality (basic implementation)
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }

    init() {
        this.updateCartUI();
        
        // Add to cart buttons
        document.querySelectorAll('.btn-primary').forEach(btn => {
            if (btn.textContent.includes('Add to Cart')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.addToCart('medident-sensitive-care', 'Medident Sensitive Care', 85);
                });
            }
        });
    }

    addToCart(id, name, price) {
        const existingItem = this.items.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: id,
                name: name,
                price: price,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.updateCartUI();
        showNotification(`${name} added to cart!`, 'success');
    }

    removeFromCart(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
        this.updateCartUI();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartUI() {
        const cartCount = this.items.reduce((total, item) => total + item.quantity, 0);
        
        // Update cart icon if it exists
        const cartIcon = document.querySelector('.cart-count');
        if (cartIcon) {
            cartIcon.textContent = cartCount;
            cartIcon.style.display = cartCount > 0 ? 'block' : 'none';
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    addScrollAnimations();
    
    // Initialize search
    initSearch();
    
    // Initialize shopping cart
    new ShoppingCart();
    
    // Initialize product carousel
    new ProductCarousel();
    
    // Add loading states to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('btn-primary') && !this.disabled) {
                const originalText = this.textContent;
                this.textContent = 'Loading...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 1000);
            }
        });
    });
});

// Performance optimization: Lazy loading images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// SEO and Analytics helper functions
function trackEvent(action, category, label) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track quiz completion
    document.addEventListener('quiz-completed', function(e) {
        trackEvent('quiz_completed', 'engagement', e.detail.result);
    });
    
    // Track product interest
    document.querySelectorAll('.btn-primary').forEach(btn => {
        if (btn.textContent.includes('Shop Now') || btn.textContent.includes('Add to Cart')) {
            btn.addEventListener('click', () => {
                trackEvent('product_interest', 'products', 'medident-sensitive-care');
            });
        }
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to your error tracking service
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}