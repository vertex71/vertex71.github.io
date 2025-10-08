export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};