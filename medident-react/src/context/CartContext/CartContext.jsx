import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { 
  getCart, 
  setCart, 
  addToCart as addToCartStorage,
  removeFromCart as removeFromCartStorage,
  updateCartQuantity as updateCartQuantityStorage,
  clearCart as clearCartStorage
} from '../../utils/localStorage';
import { PRODUCT_CONFIG } from '../../utils/constants';

const CartContext = createContext();

// Cart Action Types
const CART_ACTIONS = {
  LOAD_CART: 'LOAD_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.LOAD_CART:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case CART_ACTIONS.ADD_ITEM: {
      const { product } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === product.id && item.variantId === product.variantId
      );

      let updatedItems;
      if (existingItemIndex > -1) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += product.quantity || 1;
      } else {
        updatedItems = [...state.items, {
          id: product.id,
          variantId: product.variantId || 'default',
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: Math.min(product.quantity || 1, PRODUCT_CONFIG.MAX_QUANTITY),
          addedAt: new Date().toISOString()
        }];
      }

      return {
        ...state,
        items: updatedItems
      };
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const { productId, variantId } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === productId && item.variantId === variantId)
        )
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, variantId, quantity } = action.payload;
      
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.id === productId && item.variantId === variantId)
          )
        };
      }

      return {
        ...state,
        items: state.items.map(item =>
          item.id === productId && item.variantId === variantId
            ? { ...item, quantity: Math.min(quantity, PRODUCT_CONFIG.MAX_QUANTITY) }
            : item
        )
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

// Initial State
const initialState = {
  items: [],
  loading: true
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = getCart();
    dispatch({ 
      type: CART_ACTIONS.LOAD_CART, 
      payload: savedCart 
    });
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    if (!state.loading) {
      setCart(state.items);
    }
  }, [state.items, state.loading]);

  // Cart Actions
  const addItem = (product) => {
    // Validate product data
    if (!product.id || !product.name || !product.price) {
      console.error('Invalid product data for cart');
      return false;
    }

    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { product }
    });

    return true;
  };

  const removeItem = (productId, variantId = 'default') => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: { productId, variantId }
    });
  };

  const updateQuantity = (productId, variantId = 'default', quantity) => {
    const newQuantity = Math.max(0, Math.min(quantity, PRODUCT_CONFIG.MAX_QUANTITY));
    
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { productId, variantId, quantity: newQuantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
    clearCartStorage();
  };

  // Derived state
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  
  const totalAmount = state.items.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  );

  const isEmpty = state.items.length === 0;

  const getItemQuantity = (productId, variantId = 'default') => {
    const item = state.items.find(
      item => item.id === productId && item.variantId === variantId
    );
    return item ? item.quantity : 0;
  };

  const isInCart = (productId, variantId = 'default') => {
    return state.items.some(
      item => item.id === productId && item.variantId === variantId
    );
  };

  const value = {
    // State
    cartItems: state.items,
    loading: state.loading,
    itemCount,
    totalAmount,
    isEmpty,
    
    // Actions
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    
    // Helpers
    getItemQuantity,
    isInCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};