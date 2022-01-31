/* eslint-disable import/extensions */
import React, {} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Tone from 'tone';
import actions from '../../../redux/actions/index.js';

import Instrument from './Instrument.jsx';

const InstrumentList = () => {
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
        <div id={`instrument-player-${inst}`} key={inst}>
          <div id="inst-title">{inst}</div>
          <Instrument name={inst} />
        </div>
      ))}
    </>
  );
};

export default InstrumentList;
