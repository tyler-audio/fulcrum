const initialState = 60;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BPM':
      return action.payload;
    default:
      return state;
  }
};
