/* eslint-disable no-param-reassign */
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INSTRUMENT':
      return [...state, action.payload];
    default:
      return state;
  }
};
