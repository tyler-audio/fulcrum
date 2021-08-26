import React from 'react';
import PropTypes from 'prop-types';

const InstChannel = ({ controls }) => (
  <>
    {controls('mix-panel')}
  </>
);

InstChannel.propTypes = {
  controls: PropTypes.func,
};

InstChannel.defaultProps = {
  controls: () => {},
};

export default InstChannel;
