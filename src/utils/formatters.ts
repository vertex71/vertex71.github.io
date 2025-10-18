import { CURRENCY } from './constants';

export const formatCurrency = (amount: number, currency: string = CURRENCY): string => {
  return `${currency}${amount}`;
};

export const formatDate = (date: string | Date, options: Intl.DateTimeFormatOptions = {}): string => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };
  
  return new Date(date).toLocaleDateString('en-US', defaultOptions);
};

export const formatRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - new Date(date).getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatRating = (rating: number, maxRating: number = 5) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
  
  return {
    fullStars,
    hasHalfStar,
    emptyStars,
    rating
  };
};