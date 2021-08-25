/* eslint-disable no-param-reassign */
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PATTERN':
      state[action.instName] = action.pattern;
      return state;
    default:
      return state;
  }
};
