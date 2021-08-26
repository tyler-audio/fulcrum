import React from 'react';

const MainMasterMeter = () => (
  <div id="levels">
    <meter
      id="main-master-left"
      className="main-master-meter"
      min="-100"
      max="0"
      value="-100"
      high="-8"
      // low="-6"
    />
    <meter
      id="main-master-right"
      className="main-master-meter"
      min="-100"
      max="0"
      value="-100"
      high="-8"
    />
  </div>
);

export default MainMasterMeter;
