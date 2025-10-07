import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getOriginalTotalPrice,
    getTotalSavings
  } = useCart();

  const handleQuantityChange = (itemId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleProceedToCheckout = () => {
    // For now, just show an alert. In a real app, this would go to checkout
    alert('Proceeding to checkout... (This would integrate with payment gateway)');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <nav className="breadcrumb">
            <span onClick={() => navigate('/')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">Shopping Cart</span>
          </nav>

          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <button 
              onClick={() => navigate('/')} 
              className="btn btn-primary btn-large"
            >
              <i className="fas fa-arrow-left"></i>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <nav className="breadcrumb">
          <span onClick={() => navigate('/')} className="breadcrumb-link">Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Shopping Cart</span>
        </nav>

        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <div className="cart-summary-header">
            <span className="item-count">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}</span>
            <button onClick={clearCart} className="clear-cart-btn">
              <i className="fas fa-trash"></i>
              Clear Cart
            </button>
          </div>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <div className="item-info">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-category">{item.category}</div>
                    <div className="item-variant">Size: {item.variant.size}</div>
                  </div>
                  
                  <div className="item-price">
                    <div className="current-price">৳{item.variant.price}</div>
                    {item.variant.originalPrice > item.variant.price && (
                      <div className="original-price">was ৳{item.variant.originalPrice}</div>
                    )}
                  </div>
                </div>

                <div className="item-quantity">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                      disabled={item.quantity <= 1}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                      disabled={item.quantity >= 10}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  <div className="total-price">৳{item.variant.price * item.quantity}</div>
                  {item.variant.originalPrice > item.variant.price && (
                    <div className="savings">
                      Save ৳{(item.variant.originalPrice - item.variant.price) * item.quantity}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-btn"
                  title="Remove item"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-sidebar">
            <div className="order-summary">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>৳{getOriginalTotalPrice()}</span>
              </div>
              
              {getTotalSavings() > 0 && (
                <div className="summary-row savings-row">
                  <span>Total Savings</span>
                  <span className="savings-amount">-৳{getTotalSavings()}</span>
                </div>
              )}
              
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping">Free</span>
              </div>
              
              <hr className="summary-divider" />
              
              <div className="summary-row total-row">
                <span>Total</span>
                <span className="total-amount">৳{getTotalPrice()}</span>
              </div>

              <button 
                onClick={handleProceedToCheckout}
                className="btn btn-primary btn-large checkout-btn"
              >
                <i className="fas fa-lock"></i>
                Proceed to Checkout
              </button>

              <div className="security-info">
                <i className="fas fa-shield-alt"></i>
                <span>Secure checkout with SSL encryption</span>
              </div>
            </div>

            <div className="shipping-info">
              <h4>Free Shipping</h4>
              <p>Free standard shipping on all orders across Bangladesh</p>
              <ul>
                <li><i className="fas fa-truck"></i> Delivery in 2-3 business days</li>
                <li><i className="fas fa-undo"></i> 30-day return policy</li>
                <li><i className="fas fa-shield-alt"></i> 100% authentic products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="continue-shopping">
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-secondary"
          >
            <i className="fas fa-arrow-left"></i>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;