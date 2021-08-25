/* eslint-disable import/extensions */
import React from 'react';
import { useSelector } from 'react-redux';

import Instrument from './Instrument.jsx';
import Sampler from './Sampler.jsx';

const InstrumentList = () => {
  const instruments = useSelector((state) => state.instruments);
  const samplers = useSelector((state) => state.samplers);

  return (
    <>
      {instruments.map((inst) => (
        <div key={inst}>
          {inst}
          <Instrument name={inst} />
        </div>
      ))}
      {samplers.map((sampler) => (
        <div key={sampler}>
          {sampler}
          <Sampler sample={sampler} />
        </div>
      ))}
    </>
  );
};

export default InstrumentList;
