import React from 'react';
import './CartSummary.styles.scss';

interface CartSummaryProps {
  totalItems: number;
  originalTotalPrice: number;
  totalPrice: number;
  totalSavings: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  totalItems,
  originalTotalPrice,
  totalPrice,
  totalSavings,
  onCheckout
}) => {
  return (
    <div className="cart-summary">
      <h3 className="cart-summary__title">Order Summary</h3>
      
      <div className="cart-summary__row">
        <span>Subtotal ({totalItems} items)</span>
        <span>৳{originalTotalPrice}</span>
      </div>
      
      {totalSavings > 0 && (
        <div className="cart-summary__row cart-summary__row--savings">
          <span>Total Savings</span>
          <span className="cart-summary__savings-amount">-৳{totalSavings}</span>
        </div>
      )}
      
      <div className="cart-summary__row">
        <span>Shipping</span>
        <span className="cart-summary__free-shipping">Free</span>
      </div>
      
      <hr className="cart-summary__divider" />
      
      <div className="cart-summary__row cart-summary__row--total">
        <span>Total</span>
        <span className="cart-summary__total-amount">৳{totalPrice}</span>
      </div>

      <button 
        onClick={onCheckout}
        className="cart-summary__checkout-btn"
      >
        <i className="fas fa-lock"></i>
        Proceed to Checkout
      </button>

      <div className="cart-summary__security-info">
        <i className="fas fa-shield-alt"></i>
        <span>Secure checkout with SSL encryption</span>
      </div>
    </div>
  );
};