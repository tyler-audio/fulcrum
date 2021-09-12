/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Tone from 'tone';
import actions from '../../../redux/actions/index.js';

import Instrument from './Instrument.jsx';
// import Sampler from './Sampler.jsx';

const InstrumentList = () => {
  // const sampler = useSelector((state) => state.samplers);
  const dispatch = useDispatch();

  const instruments = useSelector((state) => state.instruments);

  const baseURL = './samples/';
  const options = {};

  instruments.forEach((inst) => {
    options[inst] = `${baseURL}${inst}.wav`;
  });

  const sounds = new Tone.Players(options);
  dispatch(actions.sounds(sounds));

  return (
    <>
      {instruments.map((inst) => (
        <div id="main-inst-list" key={inst}>
          <div id="inst-title">{inst}</div>
          <Instrument name={inst} />
        </div>
      ))}
      {/* {sampler !== '' && <Sampler />} */}
    </>
  );
};

export default InstrumentList;
