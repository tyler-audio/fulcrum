import { combineReducers } from 'redux';

import bpm from './bpm';
import patterns from './patterns';
import instruments from './instruments';
import sounds from './sounds';
import analysers from './analysers';

const rootReducer = {
  bpm,
  patterns,
  instruments,
  sounds,
  analysers,
};

export default combineReducers(rootReducer);
