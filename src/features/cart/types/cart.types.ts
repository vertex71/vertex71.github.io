export interface CartItem {
  id: string;
  name: string;
  category: string;
  image: string;
  variant: ProductVariant;
  quantity: number;
}

export interface ProductVariant {
  size: string;
  price: number;
  originalPrice: number;
  discount?: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  area: string;
  postalCode: string;
}

export interface CartState {
  items: CartItem[];
  shippingAddress: ShippingAddress | null;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: any, variant: ProductVariant, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getOriginalTotalPrice: () => number;
  getTotalSavings: () => number;
  updateShippingAddress: (address: ShippingAddress) => void;
}