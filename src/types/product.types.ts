export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  inStock: boolean;
}

export interface ProductImages {
  main: string;
  hero: string;
  thumbnails: string[];
}

export interface ProductBenefit {
  icon: string;
  text: string;
}

export interface Ingredient {
  name: string;
  description: string;
}

export interface ProductIngredients {
  active: Ingredient[];
  full: string;
}

export interface UsageStep {
  step: number;
  title: string;
  description: string;
}

export interface ProductGuarantee {
  icon: string;
  text: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  currency: string;
  inStock: boolean;
  featured: boolean;
  category: string;
  rating: number;
  reviewCount: number;
  images: ProductImages;
  variants: ProductVariant[];
  benefits: ProductBenefit[];
  features: ProductFeature[];
  ingredients: ProductIngredients;
  usage: UsageStep[];
  keyFeatures?: string[];
  clinicallyTested?: boolean;
  dermatologistRecommended?: boolean;
  fdaApproved?: boolean;
  tags?: string[];
  guarantees: ProductGuarantee[];
}

export interface RelatedProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
}