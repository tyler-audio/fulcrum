import { combineReducers } from 'redux';

import bpm from './bpm';
import patterns from './patterns';
import instruments from './instruments';
import sounds from './sounds';
import analysers from './analysers';
import samplers from './samplers';
import armed from './armed';

const rootReducer = {
  bpm,
  patterns,
  instruments,
  sounds,
  analysers,
  samplers,
  armed,
};

export default combineReducers(rootReducer);
