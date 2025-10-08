// Re-export utilities from their specific modules for backward compatibility
export { formatCurrency, formatDate, formatRelativeTime, formatFileSize, formatRating } from './formatters';
export { validateEmail, validatePhone, validateRequired } from './validators';
export { truncateText, toSlug, capitalize } from './text';
export { scrollToElement, isMobile, isTablet, isDesktop, getDeviceType } from './dom';
export { getRandomItem, shuffleArray } from './arrays';
export { deepClone, isEmpty } from './objects';
export { debounce, throttle, generateId } from './performance';
export { calculateDiscount, calculateCartTotal, calculateCartItemCount } from './cart';