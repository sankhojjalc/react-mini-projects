export const debounce = (cb, delay = 300) => {
  let timerId = null;
  return (args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => cb(args), delay);
  };
};
