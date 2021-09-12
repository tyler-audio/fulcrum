const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ISPLAYING':
      return action.payload;
    default:
      return state;
  }
};
