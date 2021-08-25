const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ARMED_TRACK':
      return action.payload;
    default:
      return state;
  }
};
