import React from 'react';
import { CartItem as CartItemType } from '../../types';
import './CartItem.styles.css';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (itemId: string, currentQuantity: number, change: number) => void;
  onRemove: (itemId: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemove
}) => {
  const handleQuantityChange = (change: number) => {
    onQuantityChange(item.id, item.quantity, change);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item__details">
        <div className="cart-item__info">
          <h3 className="cart-item__name">{item.name}</h3>
          <div className="cart-item__category">{item.category}</div>
          <div className="cart-item__variant">Size: {item.variant.size}</div>
        </div>
        
        <div className="cart-item__price">
          <div className="cart-item__current-price">৳{item.variant.price}</div>
          {item.variant.originalPrice > item.variant.price && (
            <div className="cart-item__original-price">
              was ৳{item.variant.originalPrice}
            </div>
          )}
        </div>
      </div>

      <div className="cart-item__quantity">
        <label>Quantity:</label>
        <div className="cart-item__quantity-controls">
          <button
            onClick={() => handleQuantityChange(-1)}
            disabled={item.quantity <= 1}
            className="cart-item__quantity-btn"
          >
            -
          </button>
          <span className="cart-item__quantity-value">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            disabled={item.quantity >= 10}
            className="cart-item__quantity-btn"
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item__total">
        <div className="cart-item__total-price">
          ৳{item.variant.price * item.quantity}
        </div>
        {item.variant.originalPrice > item.variant.price && (
          <div className="cart-item__savings">
            Save ৳{(item.variant.originalPrice - item.variant.price) * item.quantity}
          </div>
        )}
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="cart-item__remove-btn"
        title="Remove item"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};