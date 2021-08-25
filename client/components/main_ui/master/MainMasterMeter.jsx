import React from 'react';
import { useSelector } from 'react-redux';
import * as Tone from 'tone';

const MainMasterMeter = () => (
  <div id="levels">
    <meter
      className="main-master-meter"
      min="-100"
      max="10"
      value="-100"
    />
    <meter
      className="main-master-meter"
      min="-100"
      max="10"
      value="-100"
    />
  </div>
);

export default MainMasterMeter;
