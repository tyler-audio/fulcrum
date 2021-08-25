/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import * as Tone from 'tone';

import actions from '../../../redux/actions/index';

const BPM = () => {
  const dispatch = useDispatch();
  const bpm = useSelector((state) => state.bpm);
  // const [bpm, setBpm] = useState(60);
  // let click;
  // let drag;
  // let isClicked = false;

  // let elapsedTime = 0;
  // let tappedBPM;
  // let tapValues = [];
  // let average;

  // const getAverageBPM = (values) => {
  //   let sum = 0;
  //   for (let i = 0; i < values.length; i += 1) {
  //     sum += values[i];
  //   }
  //   return sum / values.length;
  // };

  // let bpm = 120;

  return (
    <>
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
          value={bpm}
          min="60"
          max="200"
          step="1"
        />
      </label>
      {/* <button
        type="button"
        onMouseDown={() => {
          Tone.Transport.start();
          let tapBpm = (60 / (Tone.Transport.seconds - elapsedTime)).toFixed(0);
          tapBpm = Number(tapBpm);
          setBpm(tapBpm);
          console.log(bpm);
          elapsedTime = Tone.Transport.seconds;
        }}
        // onMouseUp={() => {
        //   dispatch(actions.bpm(tappedBPM));
        //   console.log(tappedBPM);
        // }}
      >
        TAP
      </button> */}
    </>
  );
};

export default BPM;
