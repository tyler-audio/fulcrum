/* eslint-disable no-param-reassign */
const initialState = 1;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PATTERN':
      return action.payload;
    default:
      return state;
  }
};
