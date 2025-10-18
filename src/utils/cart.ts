export const calculateDiscount = (originalPrice: number, salePrice: number): number => {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

export const calculateCartTotal = (items: any[]): number => {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

export const calculateCartItemCount = (items: any[]): number => {
  return items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};