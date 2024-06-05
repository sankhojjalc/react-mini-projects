let state;

export const useStateCustom = (init = null) => {
  state = state || init;

  const updateState = (val) => {
    state = val;
  };

  return [state, updateState];
};
