export default (pattern, instName) => ({
  type: 'SET_PATTERN',
  payload: {
    instName,
    pattern,
  },
});
