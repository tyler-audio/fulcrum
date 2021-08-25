export default (analyser, sampleBuffer, instrument) => ({
  type: 'ADD_ANALYSER',
  payload: {
    analyser,
    sampleBuffer,
    instrument,
  },
});
