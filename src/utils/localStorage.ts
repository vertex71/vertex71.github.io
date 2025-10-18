import { STORAGE_KEYS } from './constants';

// Generic localStorage functions
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage:`, error);
    return defaultValue;
  }
};

export const setToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage:`, error);
    return false;
  }
};

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage:`, error);
    return false;
  }
};

export const clearStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error(`Error clearing localStorage:`, error);
    return false;
  }
};

// Cart specific functions
export const getCart = () => {
  return getFromStorage(STORAGE_KEYS.CART, []);
};

export const setCart = (cartItems) => {
  return setToStorage(STORAGE_KEYS.CART, cartItems);
};

export const addToCart = (product) => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(
    item => item.id === product.id && item.variantId === product.variantId
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += product.quantity || 1;
  } else {
    cart.push({
      id: product.id,
      variantId: product.variantId || 'default',
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: product.quantity || 1,
      addedAt: new Date().toISOString()
    });
  }

  return setCart(cart);
};

export const removeFromCart = (productId, variantId = 'default') => {
  const cart = getCart();
  const updatedCart = cart.filter(
    item => !(item.id === productId && item.variantId === variantId)
  );
  return setCart(updatedCart);
};

export const updateCartQuantity = (productId, variantId = 'default', quantity) => {
  const cart = getCart();
  const itemIndex = cart.findIndex(
    item => item.id === productId && item.variantId === variantId
  );

  if (itemIndex > -1) {
    if (quantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = quantity;
    }
    return setCart(cart);
  }
  return false;
};

export const clearCart = () => {
  return setToStorage(STORAGE_KEYS.CART, []);
};

export const getCartItemCount = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Wishlist specific functions
export const getWishlist = () => {
  return getFromStorage(STORAGE_KEYS.WISHLIST, []);
};

export const setWishlist = (wishlistItems) => {
  return setToStorage(STORAGE_KEYS.WISHLIST, wishlistItems);
};

export const addToWishlist = (product) => {
  const wishlist = getWishlist();
  const exists = wishlist.some(item => item.id === product.id);

  if (!exists) {
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      addedAt: new Date().toISOString()
    });
    return setWishlist(wishlist);
  }
  return false;
};

export const removeFromWishlist = (productId) => {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter(item => item.id !== productId);
  return setWishlist(updatedWishlist);
};

export const isInWishlist = (productId) => {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
};

export const clearWishlist = () => {
  return setToStorage(STORAGE_KEYS.WISHLIST, []);
};

// Theme specific functions
export const getTheme = () => {
  return getFromStorage(STORAGE_KEYS.THEME, 'light');
};

export const setTheme = (theme) => {
  return setToStorage(STORAGE_KEYS.THEME, theme);
};

// Quiz results functions
export const getQuizResults = () => {
  return getFromStorage(STORAGE_KEYS.QUIZ_RESULTS, null);
};

export const setQuizResults = (results) => {
  return setToStorage(STORAGE_KEYS.QUIZ_RESULTS, {
    ...results,
    completedAt: new Date().toISOString()
  });
};

export const clearQuizResults = () => {
  return removeFromStorage(STORAGE_KEYS.QUIZ_RESULTS);
};

// Check if localStorage is available
export const isStorageAvailable = () => {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};