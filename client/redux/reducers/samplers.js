/* eslint-disable no-param-reassign */
const initialState = ['808-01', 'pluck-01'];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SAMPLER':
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
