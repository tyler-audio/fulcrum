import React from 'react';
import PropTypes from 'prop-types';

const MainMasterFader = ({ volume }) => (
  <div>
    <label htmlFor="main-master-fader">
      <input
        id="main-master-fader"
        type="range"
        min="-100"
        max="0"
        step="0.5"
        onChange={(e) => {
          volume.set({
            volume: e.target.value,
          });
        }}
      />
    </label>
  </div>
);

MainMasterFader.propTypes = {
  volume: PropTypes.objectOf(PropTypes.shape),
};

MainMasterFader.defaultProps = {
  volume: {},
};

export default MainMasterFader;
