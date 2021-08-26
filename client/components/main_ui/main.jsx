/* eslint-disable import/extensions */
import React from 'react';

import '../../styles/main_ui/Main.css';
import InstrumentUI from './instruments/InstrumentUI.jsx';
import MainMaster from './master/MainMaster.jsx';

const Main = () => (
  <div id="main" className="hidden">
    <InstrumentUI />
    <MainMaster />
  </div>
);

export default Main;
