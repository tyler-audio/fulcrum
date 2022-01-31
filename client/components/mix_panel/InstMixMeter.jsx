import React from 'react';
import PropTypes from 'prop-types';

const InstMixMeter = ({ inst }) => (
  <meter
    id={`mix-meter-${inst}`}
    className="inst-mix-meter"
    min="-100"
    max="0"
    value="-100"
  />
);

InstMixMeter.propTypes = {
  inst: PropTypes.string,
};

InstMixMeter.defaultProps = {
  inst: '',
};

export default InstMixMeter;
