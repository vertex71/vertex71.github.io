export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};

export const isMobile = (): boolean => {
  return window.innerWidth < 768;
};

export const isTablet = (): boolean => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

export const isDesktop = (): boolean => {
  return window.innerWidth >= 1024;
};

export const getDeviceType = (): string => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};