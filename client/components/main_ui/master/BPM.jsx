/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import * as Tone from 'tone';

import actions from '../../../redux/actions/index';

const BPM = () => {
  const dispatch = useDispatch();
  const bpm = useSelector((state) => state.bpm);

  // let click;
  // let drag;
  // let isClicked = false;

  // let elapsedTime = 0;
  // let tapValues = [];
  // let average;

  // const getAverageBPM = (values) => {
  //   let sum = 0;
  //   for (let i = 0; i < values.length; i += 1) {
  //     sum += values[i];
  //   }
  //   return sum / values.length;
  // };

  return (
    <div>
      <div>
        {/* // onMouseDown={(e) => {
        //   isClicked = true;
        //   console.log(e.pageY);
        //   click = e.pageY;
        // }}
        // onMouseUp={() => { isClicked = false; }} */}

        {bpm}
      </div>
      <label htmlFor="bpm">
        Bpm:
        <input
          onChange={(e) => {
            dispatch(actions.bpm(e.target.value));
          }}
          id="bpm"
          type="range"
          min="60"
          max="200"
          step="1"
        />
      </label>
      {/* <button
        type="button"
        onMouseDown={() => {
          Tone.Transport.start();
          let tappedBPM = (60 / (Tone.Transport.seconds - elapsedTime)).toFixed(0);
          tappedBPM = Number(tappedBPM);
          dispatch(actions.bpm(tappedBPM));
          // if (Number.isFinite(tappedBPM)) {
          //   tapValues.push(tappedBPM);
          // }
          // if (tapValues.length > 4) {
          //   tapValues = tapValues.slice(tapValues.length - 4);
          // }
          // average = getAverageBPM(tapValues).toFixed(2);
          // average = Number(average);
          // console.log('avg', typeof average);
          // console.log('val', tapValues);
          elapsedTime = Tone.Transport.seconds;
        }}
        // onMouseUp={() => {
        //   console.log(average);
        // }}
      >
        TAP
      </button> */}
    </div>
  );
};

export default BPM;
