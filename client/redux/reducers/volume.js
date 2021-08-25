const initialState = -Infinity;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VOLUME':
      return action.payload;
    default:
      return state;
  }
};
