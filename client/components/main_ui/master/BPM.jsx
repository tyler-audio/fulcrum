/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import * as Tone from 'tone';

import '../../../styles/main_ui/Master/MainMaster.css';
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
    <div id="bpm-container">
      <div>BPM</div>
      <div>
        {/* // onMouseDown={(e) => {
        //   isClicked = true;
        //   console.log(e.pageY);
        //   click = e.pageY;
        // }}
        // onMouseUp={() => { isClicked = false; }} */}

        {bpm}
      </div>
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
    </div>
  );
};

export default BPM;
