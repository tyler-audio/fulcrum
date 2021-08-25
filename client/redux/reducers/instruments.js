/* eslint-disable no-param-reassign */
const initialState = ['closed_hat-02'];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INSTRUMENT':
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
