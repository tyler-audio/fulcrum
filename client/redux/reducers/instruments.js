/* eslint-disable no-param-reassign */
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INSTRUMENT':
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
