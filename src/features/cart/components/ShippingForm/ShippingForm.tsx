import React, { useState } from 'react';
import { ShippingAddress } from '../../types/cart.types';
import { SHIPPING_FORM } from '../../../../common';
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
      <h4 className="shipping-form__title">{SHIPPING_FORM.TITLE}</h4>
      
      <form className="shipping-form__form">
        <div className="shipping-form__group">
          <label htmlFor="fullName" className="shipping-form__label">
            {SHIPPING_FORM.LABELS.FULL_NAME}
          </label>
          <input
            type="text"
            id="fullName"
            value={address.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder={SHIPPING_FORM.PLACEHOLDERS.FULL_NAME}
            className="shipping-form__input"
            required
          />
        </div>

        <div className="shipping-form__group">
          <label htmlFor="phone" className="shipping-form__label">
            {SHIPPING_FORM.LABELS.PHONE_NUMBER}
          </label>
          <input
            type="tel"
            id="phone"
            value={address.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder={SHIPPING_FORM.PLACEHOLDERS.PHONE_NUMBER}
            className="shipping-form__input"
            required
          />
        </div>

        <div className="shipping-form__group">
          <label htmlFor="address" className="shipping-form__label">
            {SHIPPING_FORM.LABELS.ADDRESS}
          </label>
          <textarea
            id="address"
            value={address.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder={SHIPPING_FORM.PLACEHOLDERS.ADDRESS}
            rows={3}
            className="shipping-form__textarea"
            required
          />
        </div>

        <div className="shipping-form__row">
          <div className="shipping-form__group">
            <label htmlFor="city" className="shipping-form__label">
              {SHIPPING_FORM.LABELS.CITY}
            </label>
            <input
              type="text"
              id="city"
              value={address.city}
              onChange={(e) => handleChange('city', e.target.value)}
              placeholder={SHIPPING_FORM.PLACEHOLDERS.CITY}
              className="shipping-form__input"
              required
            />
          </div>

          <div className="shipping-form__group">
            <label htmlFor="area" className="shipping-form__label">
              {SHIPPING_FORM.LABELS.AREA}
            </label>
            <input
              type="text"
              id="area"
              value={address.area}
              onChange={(e) => handleChange('area', e.target.value)}
              placeholder={SHIPPING_FORM.PLACEHOLDERS.AREA}
              className="shipping-form__input"
              required
            />
          </div>
        </div>

        <div className="shipping-form__group">
          <label htmlFor="postalCode" className="shipping-form__label">
            {SHIPPING_FORM.LABELS.POSTAL_CODE}
          </label>
          <input
            type="text"
            id="postalCode"
            value={address.postalCode}
            onChange={(e) => handleChange('postalCode', e.target.value)}
            placeholder={SHIPPING_FORM.PLACEHOLDERS.POSTAL_CODE}
            className="shipping-form__input"
          />
        </div>
      </form>

      <div className="shipping-form__info">
        <div className="shipping-form__delivery-info">
          <h5 className="shipping-form__info-title">
            <i className={SHIPPING_FORM.DELIVERY_INFO.ICON}></i>
            {SHIPPING_FORM.DELIVERY_INFO.TITLE}
          </h5>
          <ul className="shipping-form__info-list">
            {SHIPPING_FORM.DELIVERY_INFO.ITEMS.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};