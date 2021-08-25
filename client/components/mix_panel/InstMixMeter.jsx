import React from 'react';
import PropTypes from 'prop-types';

const InstMixMeter = ({ inst }) => (
  <div id="levels">
    <meter
      id={`mix-meter-${inst}`}
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

InstMixMeter.propTypes = {
  inst: PropTypes.string,
  // sounds: PropTypes.objectOf(PropTypes.shape),
};

InstMixMeter.defaultProps = {
  inst: '',
  // sounds: {},
};

export default InstMixMeter;
