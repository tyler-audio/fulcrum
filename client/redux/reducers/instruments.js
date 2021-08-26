/* eslint-disable no-param-reassign */
const initialState = ['kick-01'];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INSTRUMENT':
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
