/* eslint-disable import/extensions */
import React from 'react';

import MainMasterMeter from './MainMasterMeter.jsx';
// import MixPanel from './MixPanel.jsx';
import Transport from './Transport.jsx';
import BPM from './BPM.jsx';

const MainMaster = () => (
  <div>
    <MainMasterMeter />
    {/* <MixPanel /> */}
    <Transport />
    <BPM />
  </div>
);

export default MainMaster;
