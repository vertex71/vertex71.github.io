import React, { useState } from 'react';
import { ShippingAddress } from '../../types/cart.types';
import './ShippingForm.styles.scss';

interface ShippingFormProps {
  onAddressChange: (address: ShippingAddress) => void;
  initialAddress?: Partial<ShippingAddress>;
}

export const ShippingForm: React.FC<ShippingFormProps> = ({
  onAddressChange,
  initialAddress = {}
}) => {
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: initialAddress.fullName || '',
    phone: initialAddress.phone || '',
    address: initialAddress.address || '',
    city: initialAddress.city || '',
    area: initialAddress.area || '',
    postalCode: initialAddress.postalCode || ''
  });

  const handleChange = (field: keyof ShippingAddress, value: string) => {
    const updatedAddress = { ...address, [field]: value };
    setAddress(updatedAddress);
    onAddressChange(updatedAddress);
  };

  return (
    <div className="shipping-form">
      <h4 className="shipping-form__title">Shipping Address</h4>
      
      <form className="shipping-form__form">
        <div className="shipping-form__group">
          <label htmlFor="fullName" className="shipping-form__label">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={address.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Enter your full name"
            className="shipping-form__input"
            required
          />
        </div>
        
        <div className="shipping-form__group">
          <label htmlFor="phone" className="shipping-form__label">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={address.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="01XXXXXXXXX"
            className="shipping-form__input"
            required
          />
        </div>
        
        <div className="shipping-form__group">
          <label htmlFor="address" className="shipping-form__label">
            Address *
          </label>
          <textarea
            id="address"
            value={address.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="House/Flat number, Street name"
            rows={3}
            className="shipping-form__textarea"
            required
          />
        </div>
        
        <div className="shipping-form__row">
          <div className="shipping-form__group">
            <label htmlFor="city" className="shipping-form__label">
              City *
            </label>
            <input
              type="text"
              id="city"
              value={address.city}
              onChange={(e) => handleChange('city', e.target.value)}
              placeholder="City"
              className="shipping-form__input"
              required
            />
          </div>
          
          <div className="shipping-form__group">
            <label htmlFor="area" className="shipping-form__label">
              Area *
            </label>
            <input
              type="text"
              id="area"
              value={address.area}
              onChange={(e) => handleChange('area', e.target.value)}
              placeholder="Area/Thana"
              className="shipping-form__input"
              required
            />
          </div>
        </div>
        
        <div className="shipping-form__group">
          <label htmlFor="postalCode" className="shipping-form__label">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            value={address.postalCode}
            onChange={(e) => handleChange('postalCode', e.target.value)}
            placeholder="1000"
            className="shipping-form__input"
          />
        </div>
      </form>
      
      <div className="shipping-form__info">
        <div className="shipping-form__delivery-info">
          <h5 className="shipping-form__info-title">
            <i className="fas fa-truck"></i>
            Delivery Information
          </h5>
          <ul className="shipping-form__info-list">
            <li>Free delivery across Bangladesh</li>
            <li>Delivery in 2-3 business days</li>
            <li>Cash on delivery available</li>
          </ul>
        </div>
      </div>
    </div>
  );
};