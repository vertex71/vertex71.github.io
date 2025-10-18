import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

// Types
interface ProductVariant {
  size: string;
  price: number;
  originalPrice: number;
  discount?: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
}

interface CartItem {
  id: string;
  productId: string;
  name: string;
  category: string;
  image: string;
  variant: ProductVariant;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; variant: ProductVariant; quantity?: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { itemId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: { items: CartItem[] } };

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getOriginalTotalPrice: () => number;
  getTotalSavings: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart reducer to manage cart state
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, variant, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.productId === product.id && item.variant.size === variant.size
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
        return {
          ...state,
          items: updatedItems
        };
      } else {
        // Add new item
        const newItem: CartItem = {
          id: `${product.id}-${variant.size}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          category: product.category,
          image: product.image,
          variant,
          quantity
        };
        return {
          ...state,
          items: [...state.items, newItem]
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      const { itemId } = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== itemId)
      };
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload;
      return {
        ...state,
        items: state.items.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      };
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        items: []
      };
    }

    case 'LOAD_CART': {
      const { items } = action.payload;
      return {
        ...state,
        items
      };
    }

    default:
      return state;
  }
};

// Cart Provider component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('medident-cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: { items: parsedCart.items || [] } });
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem('medident-cart', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state]);

  // Cart actions
  const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, variant, quantity } });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { itemId } });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Helper functions
  const getTotalItems = (): number => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = (): number => {
    return state.items.reduce((total, item) => total + (item.variant.price * item.quantity), 0);
  };

  const getOriginalTotalPrice = (): number => {
    return state.items.reduce((total, item) => total + (item.variant.originalPrice * item.quantity), 0);
  };

  const getTotalSavings = (): number => {
    return getOriginalTotalPrice() - getTotalPrice();
  };

  const value: CartContextType = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getOriginalTotalPrice,
    getTotalSavings
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};