import { combineReducers } from 'redux';

import bpm from './bpm';
import patterns from './patterns';
import instruments from './instruments';
import volume from './volume';
import sounds from './sounds';

const rootReducer = {
  bpm,
  patterns,
  instruments,
  volume,
  sounds,
};

export default combineReducers(rootReducer);
