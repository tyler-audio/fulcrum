/* eslint-disable no-param-reassign */
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ANALYSER':
      // for (let i = 0; i < state.length; i += 1) {
      //   if (state[i].instrument === action.payload.instrument) {
      //     return state;
      //   }
      // }
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
