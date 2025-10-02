// Product Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Product Image Gallery
    class ProductGallery {
        constructor() {
            this.mainImage = document.getElementById('main-product-image');
            this.thumbnails = document.querySelectorAll('.thumbnail');
            this.init();
        }

        init() {
            this.thumbnails.forEach(thumb => {
                thumb.addEventListener('click', (e) => {
                    this.switchMainImage(e.target);
                });
            });
        }

        switchMainImage(clickedThumb) {
            // Remove active class from all thumbnails
            this.thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            clickedThumb.classList.add('active');
            
            // Update main image
            this.mainImage.src = clickedThumb.src.replace('.png', '-large.png');
        }
    }

    // Product Tabs
    class ProductTabs {
        constructor() {
            this.tabButtons = document.querySelectorAll('.tab-btn');
            this.tabPanels = document.querySelectorAll('.tab-panel');
            this.init();
        }

        init() {
            this.tabButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    this.switchTab(e.target.dataset.tab);
                });
            });
        }

        switchTab(tabId) {
            // Remove active class from all buttons and panels
            this.tabButtons.forEach(btn => btn.classList.remove('active'));
            this.tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to selected button and panel
            document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }
    }

    // FAQ Accordion
    class FAQAccordion {
        constructor() {
            this.faqItems = document.querySelectorAll('.faq-item');
            this.init();
        }

        init() {
            this.faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    this.toggleFAQ(item);
                });
            });
        }

        toggleFAQ(item) {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-question i');
            
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                answer.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close other open FAQs
                this.faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = null;
                        otherItem.querySelector('.faq-question i').style.transform = 'rotate(0deg)';
                    }
                });
                
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        }
    }

    // Quantity Selector
    class QuantitySelector {
        constructor() {
            this.qtyInput = document.querySelector('.qty-input');
            this.minusBtn = document.querySelector('.qty-btn.minus');
            this.plusBtn = document.querySelector('.qty-btn.plus');
            this.init();
        }

        init() {
            this.minusBtn.addEventListener('click', () => this.decreaseQty());
            this.plusBtn.addEventListener('click', () => this.increaseQty());
            this.qtyInput.addEventListener('change', () => this.validateQty());
        }

        decreaseQty() {
            const currentValue = parseInt(this.qtyInput.value);
            if (currentValue > 1) {
                this.qtyInput.value = currentValue - 1;
                this.updatePrice();
            }
        }

        increaseQty() {
            const currentValue = parseInt(this.qtyInput.value);
            const maxValue = parseInt(this.qtyInput.max);
            if (currentValue < maxValue) {
                this.qtyInput.value = currentValue + 1;
                this.updatePrice();
            }
        }

        validateQty() {
            const value = parseInt(this.qtyInput.value);
            const min = parseInt(this.qtyInput.min);
            const max = parseInt(this.qtyInput.max);
            
            if (value < min) this.qtyInput.value = min;
            if (value > max) this.qtyInput.value = max;
            
            this.updatePrice();
        }

        updatePrice() {
            // Update total price based on quantity (if needed)
            const quantity = parseInt(this.qtyInput.value);
            const unitPrice = this.getSelectedVariantPrice();
            const totalPrice = quantity * unitPrice;
            
            // Update display if there's a total price element
            const totalPriceElement = document.querySelector('.total-price');
            if (totalPriceElement) {
                totalPriceElement.textContent = `৳${totalPrice}`;
            }
        }

        getSelectedVariantPrice() {
            const selectedVariant = document.querySelector('input[name="size"]:checked');
            const priceText = selectedVariant.closest('.variant-option').querySelector('.variant-price').textContent;
            return parseInt(priceText.replace('৳', ''));
        }
    }

    // Product Variant Selection
    class VariantSelector {
        constructor() {
            this.variantOptions = document.querySelectorAll('input[name="size"]');
            this.priceElement = document.querySelector('.current-price');
            this.init();
        }

        init() {
            this.variantOptions.forEach(option => {
                option.addEventListener('change', (e) => {
                    this.updatePrice(e.target);
                });
            });
        }

        updatePrice(selectedOption) {
            const variantInfo = selectedOption.closest('.variant-option').querySelector('.variant-price');
            const newPrice = variantInfo.textContent;
            this.priceElement.textContent = newPrice;
            
            // Update any quantity-based calculations
            const qtySelector = new QuantitySelector();
            qtySelector.updatePrice();
        }
    }

    // Product Filter (for future expansion)
    class ProductFilter {
        constructor() {
            this.filterButtons = document.querySelectorAll('.filter-btn');
            this.productItems = document.querySelectorAll('.product-item');
            this.init();
        }

        init() {
            this.filterButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    this.filterProducts(e.target.dataset.filter);
                    this.setActiveFilter(e.target);
                });
            });
        }

        filterProducts(filter) {
            this.productItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        setActiveFilter(activeBtn) {
            this.filterButtons.forEach(btn => btn.classList.remove('active'));
            activeBtn.classList.add('active');
        }
    }

    // Wishlist Functionality
    class WishlistManager {
        constructor() {
            this.wishlistBtn = document.querySelector('.wishlist-btn');
            this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            this.init();
        }

        init() {
            this.updateWishlistButton();
            
            if (this.wishlistBtn) {
                this.wishlistBtn.addEventListener('click', () => {
                    this.toggleWishlist();
                });
            }
        }

        toggleWishlist() {
            const productId = 'medident-sensitive-care'; // This could be dynamic
            const productName = 'Medident Sensitive Care';
            
            if (this.isInWishlist(productId)) {
                this.removeFromWishlist(productId);
                showNotification('Removed from wishlist', 'info');
            } else {
                this.addToWishlist(productId, productName);
                showNotification('Added to wishlist!', 'success');
            }
            
            this.updateWishlistButton();
        }

        addToWishlist(id, name) {
            this.wishlist.push({ id, name, dateAdded: new Date().toISOString() });
            this.saveWishlist();
        }

        removeFromWishlist(id) {
            this.wishlist = this.wishlist.filter(item => item.id !== id);
            this.saveWishlist();
        }

        isInWishlist(id) {
            return this.wishlist.some(item => item.id === id);
        }

        saveWishlist() {
            localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
        }

        updateWishlistButton() {
            if (this.wishlistBtn) {
                const productId = 'medident-sensitive-care';
                const icon = this.wishlistBtn.querySelector('i');
                
                if (this.isInWishlist(productId)) {
                    icon.className = 'fas fa-heart';
                    this.wishlistBtn.classList.add('active');
                } else {
                    icon.className = 'far fa-heart';
                    this.wishlistBtn.classList.remove('active');
                }
            }
        }
    }

    // Review Helpfulness
    class ReviewHelpfulness {
        constructor() {
            this.helpfulButtons = document.querySelectorAll('.helpful-btn');
            this.init();
        }

        init() {
            this.helpfulButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    this.markHelpful(e.target);
                });
            });
        }

        markHelpful(button) {
            // Prevent multiple clicks
            if (button.classList.contains('clicked')) return;
            
            button.classList.add('clicked');
            button.disabled = true;
            
            // Extract current count and increment
            const countMatch = button.textContent.match(/\((\d+)\)/);
            if (countMatch) {
                const currentCount = parseInt(countMatch[1]);
                const newCount = currentCount + 1;
                button.textContent = button.textContent.replace(/\(\d+\)/, `(${newCount})`);
            }
            
            showNotification('Thank you for your feedback!', 'success');
        }
    }

    // Product Image Zoom (on hover)
    class ImageZoom {
        constructor() {
            this.mainImage = document.getElementById('main-product-image');
            this.init();
        }

        init() {
            if (this.mainImage) {
                this.mainImage.addEventListener('mousemove', (e) => this.zoomImage(e));
                this.mainImage.addEventListener('mouseleave', () => this.resetZoom());
            }
        }

        zoomImage(e) {
            const rect = this.mainImage.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            this.mainImage.style.transformOrigin = `${x}% ${y}%`;
            this.mainImage.style.transform = 'scale(1.5)';
            this.mainImage.style.cursor = 'zoom-in';
        }

        resetZoom() {
            this.mainImage.style.transform = 'scale(1)';
            this.mainImage.style.cursor = 'default';
        }
    }

    // Enhanced Add to Cart
    class EnhancedCart extends ShoppingCart {
        addToCart(id, name, price) {
            const quantity = parseInt(document.querySelector('.qty-input').value);
            const selectedSize = document.querySelector('input[name="size"]:checked').value;
            
            const productName = `${name} (${selectedSize})`;
            const productId = `${id}-${selectedSize}`;
            
            // Call parent method with modified parameters
            super.addToCart(productId, productName, price);
            
            // Add animation to cart button
            const cartBtn = document.querySelector('.add-to-cart');
            cartBtn.classList.add('added');
            cartBtn.textContent = 'Added to Cart!';
            
            setTimeout(() => {
                cartBtn.classList.remove('added');
                cartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            }, 2000);
        }
    }

    // Initialize all components
    new ProductGallery();
    new ProductTabs();
    new FAQAccordion();
    new QuantitySelector();
    new VariantSelector();
    new ProductFilter();
    new WishlistManager();
    new ReviewHelpfulness();
    new ImageZoom();
    new EnhancedCart();

    // Smooth scrolling for anchor links within page
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

    // Sticky add to cart button on mobile
    function handleStickyCart() {
        const productActions = document.querySelector('.product-actions');
        const footer = document.querySelector('.footer');
        
        if (window.innerWidth <= 768 && productActions) {
            window.addEventListener('scroll', () => {
                const footerRect = footer.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                if (footerRect.top > viewportHeight) {
                    productActions.classList.add('sticky');
                } else {
                    productActions.classList.remove('sticky');
                }
            });
        }
    }

    handleStickyCart();

    // Performance: Lazy load review images
    const reviewImages = document.querySelectorAll('.reviewer-avatar');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    reviewImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
});

// Additional product page specific styles
const additionalStyles = `
    .product-hero {
        padding: 120px 0 60px;
        background: linear-gradient(135deg, #EBF3FD 0%, #F8FBFF 100%);
    }

    .breadcrumb {
        margin-bottom: 2rem;
        font-size: 0.9rem;
    }

    .breadcrumb a {
        color: var(--primary-color);
        text-decoration: none;
    }

    .separator {
        margin: 0 0.5rem;
        color: var(--text-light);
    }

    .product-filters {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }

    .filter-btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid var(--border-color);
        background: transparent;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: var(--transition);
    }

    .filter-btn.active,
    .filter-btn:hover {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: white;
    }

    .product-card-large {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        background: white;
        padding: 3rem;
        border-radius: 16px;
        box-shadow: var(--shadow-medium);
    }

    .thumbnail-gallery {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .thumbnail {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: var(--border-radius);
        cursor: pointer;
        border: 2px solid transparent;
        transition: var(--transition);
    }

    .thumbnail.active,
    .thumbnail:hover {
        border-color: var(--primary-color);
    }

    .product-badge {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .bestseller {
        background: var(--accent-color);
        color: white;
    }

    .local {
        background: var(--secondary-color);
        color: white;
    }

    .variant-options {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .variant-option {
        cursor: pointer;
    }

    .variant-option input {
        display: none;
    }

    .variant-info {
        display: block;
        padding: 1rem;
        border: 2px solid var(--border-color);
        border-radius: var(--border-radius);
        text-align: center;
        transition: var(--transition);
    }

    .variant-option input:checked + .variant-info {
        border-color: var(--primary-color);
        background: #EBF3FD;
    }

    .quantity-selector {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-right: 1rem;
    }

    .qty-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--border-color);
        background: white;
        cursor: pointer;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .qty-input {
        width: 60px;
        height: 40px;
        text-align: center;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
    }

    .product-guarantees {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
    }

    .guarantee-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
    }

    .guarantee-item i {
        color: var(--secondary-color);
    }

    .tab-buttons {
        display: flex;
        border-bottom: 1px solid var(--border-color);
        margin-bottom: 2rem;
    }

    .tab-btn {
        padding: 1rem 2rem;
        border: none;
        background: transparent;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        transition: var(--transition);
    }

    .tab-btn.active {
        border-bottom-color: var(--primary-color);
        color: var(--primary-color);
    }

    .ingredients-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .ingredient-item {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
    }

    .ingredient-icon {
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        flex-shrink: 0;
    }

    .usage-steps {
        margin-bottom: 2rem;
    }

    .step {
        display: flex;
        gap: 1.5rem;
        margin-bottom: 2rem;
        align-items: flex-start;
    }

    .step-number {
        width: 40px;
        height: 40px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
    }

    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 1rem 0;
        border-bottom: 1px solid var(--border-color);
    }

    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        padding: 0 0 1rem 0;
    }

    .faq-item.active .faq-answer {
        padding: 1rem 0;
    }

    .reviews-summary {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
        padding: 2rem;
        background: var(--light-gray);
        border-radius: var(--border-radius);
    }

    .overall-rating {
        text-align: center;
    }

    .rating-score {
        font-size: 3rem;
        font-weight: bold;
        color: var(--primary-color);
    }

    .rating-breakdown {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .rating-bar {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .rating-label {
        min-width: 60px;
        font-size: 0.9rem;
    }

    .bar {
        flex: 1;
        height: 8px;
        background: var(--border-color);
        border-radius: 4px;
        overflow: hidden;
    }

    .fill {
        height: 100%;
        background: var(--accent-color);
        transition: width 0.3s ease;
    }

    .rating-percent {
        min-width: 40px;
        font-size: 0.9rem;
        text-align: right;
    }

    .review-item {
        padding: 2rem;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        margin-bottom: 1.5rem;
    }

    .review-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .reviewer-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .reviewer-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    .verified-badge {
        background: var(--secondary-color);
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        margin-left: 0.5rem;
    }

    .review-helpful {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .helpful-btn {
        border: 1px solid var(--border-color);
        background: white;
        padding: 0.5rem 1rem;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: var(--transition);
    }

    .helpful-btn:hover:not(.clicked) {
        background: var(--light-gray);
    }

    .helpful-btn.clicked {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }

    .related-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    .related-item {
        text-align: center;
        padding: 2rem;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        transition: var(--transition);
    }

    .related-item:hover {
        box-shadow: var(--shadow-medium);
        transform: translateY(-5px);
    }

    .related-item img {
        width: 100%;
        max-width: 150px;
        height: auto;
        margin-bottom: 1rem;
    }

    .related-item .price {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--primary-color);
        margin: 1rem 0;
    }

    .wishlist-btn.active {
        background: var(--accent-color);
        border-color: var(--accent-color);
        color: white;
    }

    .add-to-cart.added {
        background: var(--secondary-color);
        border-color: var(--secondary-color);
    }

    @media (max-width: 768px) {
        .product-card-large {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
        }

        .thumbnail-gallery {
            justify-content: center;
        }

        .product-filters {
            flex-wrap: wrap;
        }

        .reviews-summary {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .product-actions.sticky {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            z-index: 100;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);