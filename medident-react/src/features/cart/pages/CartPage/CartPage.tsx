import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../contexts/CartContext';
import { CartItem, CartSummary, ShippingForm } from '../../components';
import { ShippingAddress } from '../../types';
import './CartPage.styles.css';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    items,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    getOriginalTotalPrice,
    getTotalSavings
  } = useCart();

  const handleQuantityChange = (itemId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleShippingAddressChange = (address: ShippingAddress) => {
    // Handle shipping address update
    console.log('Shipping address updated:', address);
  };

  const handleProceedToCheckout = () => {
    // For now, just show an alert. In a real app, this would go to checkout
    alert('Proceeding to checkout... (This would integrate with payment gateway)');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-page__container">
          <nav className="cart-page__breadcrumb">
            <span onClick={() => navigate('/')} className="cart-page__breadcrumb-link">
              Home
            </span>
            <span className="cart-page__breadcrumb-separator">›</span>
            <span className="cart-page__breadcrumb-current">Shopping Cart</span>
          </nav>

          <div className="cart-page__empty">
            <div className="cart-page__empty-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <button 
              onClick={() => navigate('/')} 
              className="cart-page__continue-btn"
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
      <div className="cart-page__container">
        <nav className="cart-page__breadcrumb">
          <span onClick={() => navigate('/')} className="cart-page__breadcrumb-link">
            Home
          </span>
          <span className="cart-page__breadcrumb-separator">›</span>
          <span className="cart-page__breadcrumb-current">Shopping Cart</span>
        </nav>

        <div className="cart-page__content">
          <div className="cart-page__items">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <div className="cart-page__sidebar">
            <CartSummary
              totalItems={getTotalItems()}
              originalTotalPrice={getOriginalTotalPrice()}
              totalPrice={getTotalPrice()}
              totalSavings={getTotalSavings()}
              onCheckout={handleProceedToCheckout}
            />

            <ShippingForm
              onAddressChange={handleShippingAddressChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};