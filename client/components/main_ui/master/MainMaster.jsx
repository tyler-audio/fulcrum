/* eslint-disable import/extensions */
import React from 'react';
import { useSelector } from 'react-redux';

import '../../../styles/main_ui/Master/MainMaster.css';
import MainMasterMeter from './MainMasterMeter.jsx';
import Transport from './Transport.jsx';
import BPM from './BPM.jsx';

const MainMaster = () => {
  const instruments = useSelector((state) => state.instruments);
  const samplers = useSelector((state) => state.samplers);
  if (instruments.length !== 0 || samplers !== '') {
    return (
      <div id="main-master">
        <MainMasterMeter />
        <Transport />
        <BPM />
      </div>
    );
  }
  return <></>;
};

export default MainMaster;
