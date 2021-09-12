import React from 'react';
import PropTypes from 'prop-types';

// import '../../../styles/Modal.css';

const MainMasterFader = ({ volume }) => (
  <webaudio-knob
    onMouseOver={(e) => e.target.addEventListener('input', () => {
      volume.set({
        volume: e.target.value,
      });
    })}
    src="./knobs/Vintage_Knob.png"
    min="-64"
    max="0"
    value="-12"
    diameter="64"
  />
);

MainMasterFader.propTypes = {
  volume: PropTypes.objectOf(PropTypes.shape),
};

MainMasterFader.defaultProps = {
  volume: {},
};

export default MainMasterFader;
