/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/Modal.css';

const MainMasterFader = ({ volume }) => {
  const handleModal = () => {
    const masterFader = document.querySelector('#master-fader-modal');
    const faderOverlay = document.querySelector('#master-fader-overlay');

    if (masterFader.classList.contains('active') && faderOverlay.classList.contains('active')) {
      masterFader.classList.remove('active');
      faderOverlay.classList.remove('active');
    } else {
      masterFader.classList.add('active');
      faderOverlay.classList.add('active');
    }
  };

  return (
    <>
      <button onClick={handleModal} type="button">FADER</button>
      <div id="master-fader-modal">
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
      <div onClick={handleModal} id="master-fader-overlay" />
    </>
  );
};

MainMasterFader.propTypes = {
  volume: PropTypes.objectOf(PropTypes.shape),
};

MainMasterFader.defaultProps = {
  volume: {},
};

export default MainMasterFader;
