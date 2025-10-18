export const CART_PAGE = {
  BREADCRUMB: {
    HOME: 'Home',
    SHOPPING_CART: 'Shopping Cart',
    SEPARATOR: '›',
  },
  EMPTY_CART: {
    TITLE: 'Your cart is empty',
    MESSAGE: 'Looks like you haven\'t added any products to your cart yet.',
    BUTTON: 'Continue Shopping',
    ICON: 'fas fa-shopping-cart',
    BACK_ICON: 'fas fa-arrow-left',
  },
  CHECKOUT: {
    ALERT_MESSAGE: 'Proceeding to checkout... (This would integrate with payment gateway)',
  },
} as const;

export const SHIPPING_FORM = {
  TITLE: 'Shipping Address',
  LABELS: {
    FULL_NAME: 'Full Name *',
    PHONE_NUMBER: 'Phone Number *',
    ADDRESS: 'Address *',
    CITY: 'City *',
    AREA: 'Area *',
    POSTAL_CODE: 'Postal Code',
  },
  PLACEHOLDERS: {
    FULL_NAME: 'Enter your full name',
    PHONE_NUMBER: '01XXXXXXXXX',
    ADDRESS: 'House/Flat number, Street name',
    CITY: 'City',
    AREA: 'Area/Thana',
    POSTAL_CODE: '1000',
  },
  DELIVERY_INFO: {
    TITLE: 'Delivery Information',
    ICON: 'fas fa-truck',
    ITEMS: [
      'Free delivery across Bangladesh',
      'Delivery in 2-3 business days',
      'Cash on delivery available',
    ],
  },
} as const;
