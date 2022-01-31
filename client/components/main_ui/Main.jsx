/* eslint-disable import/extensions */
import React from 'react';

import InstrumentUI from './instruments/InstrumentUI.jsx';
import MainMaster from './master/MainMaster.jsx';

const Main = () => (
  <div id="main">
    <div id="overlay-shadow" />
    <InstrumentUI />
    <MainMaster />
  </div>
);

export default Main;
