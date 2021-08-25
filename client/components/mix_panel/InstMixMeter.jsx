import React from 'react';

const InstMixMeter = () => (
  <div id="levels">
    <meter
      className="inst-mix-meter"
      min="-100"
      max="10"
      value="-100"
    />
    {/* <meter
      className="main-master-meter"
      min="-100"
      max="10"
      value="-100"
    /> */}
  </div>
);

export default InstMixMeter;
