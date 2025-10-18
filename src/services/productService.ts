import { Product, RelatedProduct } from '../types/product.types';
import { products, relatedProducts } from '../data/products';

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (excludeId: string | null = null): RelatedProduct[] => {
  return relatedProducts.filter(product => product.id !== excludeId);
};

export const getAllProducts = (): Product[] => {
  return products;
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};