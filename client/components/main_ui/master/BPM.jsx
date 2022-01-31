/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../../redux/actions/index';

const BPM = () => {
  const dispatch = useDispatch();
  const bpm = useSelector((state) => state.bpm);

  return (
    <div id="bpm-container">
      <div>BPM</div>
      <div>{bpm}</div>
      <webaudio-knob
        onMouseOver={(e) => e.target.addEventListener('input', () => {
          dispatch(actions.bpm(e.target.value));
        })}
        src="./knobs/Vintage_Knob.png"
        value="120"
        min="60"
        max="200"
        diameter="64"
      />
    </div>
  );
};

export default BPM;
