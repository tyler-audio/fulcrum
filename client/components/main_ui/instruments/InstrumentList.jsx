/* eslint-disable import/extensions */
import React from 'react';
import { useSelector } from 'react-redux';

import Instrument from './Instrument.jsx';
import Sampler from './Sampler.jsx';

const InstrumentList = () => {
  const instruments = useSelector((state) => state.instruments);
  const sampler = useSelector((state) => state.samplers);

  return (
    <>
      {instruments.map((inst) => (
        <div id="main-inst-list" key={inst}>
          <div id="inst-title">{inst}</div>
          <Instrument name={inst} />
        </div>
      ))}
      {sampler !== '' && <Sampler />}
    </>
  );
};

export default InstrumentList;
