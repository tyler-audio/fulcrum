import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/mix_panel/MixPanel.css';

const InstMixMeter = ({ inst }) => (
  <div id="levels">
    <meter
      id={`mix-meter-${inst}`}
      className="inst-mix-meter"
      min="-100"
      max="0"
      value="-100"
    />
  </div>
);

InstMixMeter.propTypes = {
  inst: PropTypes.string,
};

InstMixMeter.defaultProps = {
  inst: '',
};

export default InstMixMeter;
