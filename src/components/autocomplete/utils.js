import { fruitsData } from "./data";

export const getFruitsData = (keyword) => {
  const data = fruitsData.filter((item) =>
    item.toLowerCase().includes(keyword)
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
};

export function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    return new Promise((resolve) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        resolve(fn(args));
      }, delay);
    });
  };
}

export const cacheData = (fn) => {
  const cache = {};
  return async (...args) => {
    if (cache[args]) {
      return cache[args];
    } else {
      const result = await fn(...args);
      cache[args] = result;
      return result;
    }
  };
};
