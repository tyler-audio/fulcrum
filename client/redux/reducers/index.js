import { combineReducers } from 'redux';

import bpm from './bpm';
import patterns from './patterns';
import instruments from './instruments';
import sounds from './sounds';
import analysers from './analysers';
import samplers from './samplers';
import armed from './armed';
import isPlaying from './isPlaying';

const rootReducer = {
  bpm,
  patterns,
  instruments,
  sounds,
  analysers,
  samplers,
  armed,
  isPlaying,
};

export default combineReducers(rootReducer);
