/* eslint-disable import/extensions */
import React from 'react';
import { useSelector } from 'react-redux';

// import '../../../styles/main_ui/Master/MainMaster.css';
import MainMasterMeter from './MainMasterMeter.jsx';
import Transport from './Transport.jsx';
import BPM from './BPM.jsx';

const MainMaster = () => {
  const instruments = useSelector((state) => state.instruments);
  if (instruments.length !== 0) {
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
