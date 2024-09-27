const RED = "red";
const YELLOW = "yellow";
const GREEN = "green";

export const data = [
  { color: RED, timer: 1000 },
  { color: YELLOW, timer: 2000 },
  { color: GREEN, timer: 5000 },
];

export const debounce = (fn, delay = 1000) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
