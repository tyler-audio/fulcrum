/* eslint-disable import/extensions */
import React from 'react';
import { useSelector } from 'react-redux';

import Instrument from './Instrument.jsx';

const InstrumentList = () => {
  const instruments = useSelector((state) => state.instruments);
  const sounds = useSelector((state) => state.sounds);

  return (
    <div>
      {instruments.map((inst) => (
        <div key={inst}>
          {inst}
          <Instrument name={inst} sounds={sounds} />
        </div>
      ))}
    </div>
  );
};

export default InstrumentList;
