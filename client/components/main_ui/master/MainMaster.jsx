/* eslint-disable import/extensions */
import React from 'react';
import * as Tone from 'tone';

import MainMasterMeter from './MainMasterMeter.jsx';
// import MixPanel from './MixPanel.jsx';
import Transport from './Transport.jsx';
import BPM from './BPM.jsx';

const MainMaster = () => {
  return (
    <div>
      <MainMasterMeter />
      {/* <MixPanel /> */}
      <Transport />
      <BPM />
    </div>
  );
};

export default MainMaster;
