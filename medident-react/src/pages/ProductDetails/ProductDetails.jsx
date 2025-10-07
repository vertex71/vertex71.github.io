import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Product data
  const productData = {
    'sensitive-care': {
      name: 'Medident Sensitive Care',
      category: 'Sensitivity Relief',
      description: 'Advanced formula for immediate and lasting relief from tooth sensitivity. Clinically proven to provide 24/7 protection while strengthening enamel and freshening breath.',
      mainImage: '/assets/medident-4.png',
      gallery: ['/assets/medident-4.png', '/assets/medident-sensetive-care.jpeg'],
      benefits: [
        { icon: 'fas fa-shield-alt', text: '24/7 Protection from sensitivity' },
        { icon: 'fas fa-check-circle', text: 'Clinically proven formula' },
        { icon: 'fas fa-leaf', text: 'Fresh mint flavor' },
        { icon: 'fas fa-tooth', text: 'Strengthens tooth enamel' },
        { icon: 'fas fa-heart', text: 'Gentle on sensitive teeth' },
        { icon: 'fas fa-star', text: 'Dentist recommended' }
      ],
      ingredients: [
        'Potassium Nitrate 5%',
        'Sodium Fluoride 0.15%',
        'Hydrated Silica',
        'Glycerin',
        'Natural Mint Extract'
      ],
      directions: [
        'Brush teeth thoroughly with a soft-bristled toothbrush',
        'Use twice daily for best results',
        'Do not swallow',
        'Keep out of reach of children',
        'Consult dentist if sensitivity persists'
      ]
    },
    'gum-care': {
      name: 'Medident-G Gum Care',
      category: 'Gum Health',
      description: 'Advanced gum protection formula specifically designed for healthy gums and fresh breath. Anti-bacterial formula prevents bleeding and strengthens gums naturally.',
      mainImage: '/assets/medident-5.png',
      gallery: ['/assets/medident-5.png', '/assets/medident-g.jpeg'],
      benefits: [
        { icon: 'fas fa-heart', text: 'Advanced gum protection' },
        { icon: 'fas fa-shield-alt', text: 'Anti-bacterial formula' },
        { icon: 'fas fa-droplet', text: 'Prevents gum bleeding' },
        { icon: 'fas fa-leaf', text: 'Natural herbal extracts' },
        { icon: 'fas fa-refresh', text: 'Long-lasting fresh breath' },
        { icon: 'fas fa-check-circle', text: 'Dentist recommended' }
      ],
      ingredients: [
        'Stannous Fluoride 0.454%',
        'Triclosan 0.3%',
        'Zinc Citrate',
        'Aloe Vera Extract',
        'Tea Tree Oil'
      ],
      directions: [
        'Apply to toothbrush and brush gently',
        'Focus on gum line for 2 minutes',
        'Use twice daily after meals',
        'Rinse thoroughly after brushing',
        'Regular dental checkups recommended'
      ]
    }
  };

  const variants = [
    { size: '40g', price: 50, originalPrice: 55, discount: '9%' },
    { size: '100g', price: 120, originalPrice: 135, discount: '11%' },
    { size: '140g', price: 150, originalPrice: 170, discount: '12%' }
  ];

  // Component state
  const [selectedVariant, setSelectedVariant] = useState(1); // Default to 100g
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('benefits');

  const currentProduct = productData[productId];

  // Scroll to top when component mounts or productId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!currentProduct) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    const product = {
      id: productId,
      name: currentProduct.name,
      category: currentProduct.category,
      image: currentProduct.mainImage
    };
    
    const variant = variants[selectedVariant];
    
    addToCart(product, variant, quantity);
    
    // Navigate to cart page
    navigate('/cart');
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-details">
      {/* Breadcrumb */}
      <div className="container">
        <nav className="breadcrumb">
          <span onClick={() => navigate('/')} className="breadcrumb-link">Home</span>
          <span className="breadcrumb-separator">›</span>
          <span onClick={() => navigate('/#products')} className="breadcrumb-link">Products</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{currentProduct.name}</span>
        </nav>
      </div>

      {/* Product Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img 
                  src={currentProduct.gallery[selectedImage]} 
                  alt={currentProduct.name}
                  className="main-product-image"
                />
              </div>
              <div className="image-thumbnails">
                {currentProduct.gallery.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${currentProduct.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="product-category">{currentProduct.category}</div>
              <h1 className="product-title">{currentProduct.name}</h1>
              <p className="product-description">{currentProduct.description}</p>

              {/* Size Selection */}
              <div className="variant-selection">
                <h3>Choose Size:</h3>
                <div className="variant-options">
                  {variants.map((variant, index) => (
                    <button
                      key={index}
                      className={`variant-option ${selectedVariant === index ? 'selected' : ''}`}
                      onClick={() => setSelectedVariant(index)}
                    >
                      <span className="variant-size">{variant.size}</span>
                      <span className="variant-price">৳{variant.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Display */}
              <div className="price-section">
                <div className="current-price">৳{variants[selectedVariant].price}</div>
                <div className="price-details">
                  <span className="original-price">was ৳{variants[selectedVariant].originalPrice}</span>
                  <span className="savings">Save {variants[selectedVariant].discount}</span>
                </div>
              </div>

              {/* Quantity & Cart */}
              <div className="purchase-section">
                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-value">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= 10}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={handleAddToCart} className="btn btn-primary btn-large add-to-cart">
                  <i className="fas fa-shopping-cart"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="product-details-tabs">
        <div className="container">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Benefits
            </button>
            <button 
              className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button 
              className={`tab-btn ${activeTab === 'directions' ? 'active' : ''}`}
              onClick={() => setActiveTab('directions')}
            >
              How to Use
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'benefits' && (
              <div className="benefits-content">
                <h3>Key Benefits</h3>
                <div className="benefits-grid">
                  {currentProduct.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <i className={benefit.icon}></i>
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="ingredients-content">
                <h3>Active Ingredients</h3>
                <ul className="ingredients-list">
                  {currentProduct.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'directions' && (
              <div className="directions-content">
                <h3>Directions for Use</h3>
                <ol className="directions-list">
                  {currentProduct.directions.map((direction, index) => (
                    <li key={index}>{direction}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;