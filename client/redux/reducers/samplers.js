/* eslint-disable no-param-reassign */
const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SAMPLER':
      // state = [...state, action.payload];
      return action.payload;
    default:
      return state;
  }
};
