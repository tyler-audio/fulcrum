/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Tone from 'tone';
import actions from '../../../redux/actions/index.js';

import configLoop from '../Looper';
import volMeters from '../../Meters.js';
import MainMasterFader from './MainMasterFader.jsx';

const Transport = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => ({
    sounds: s.sounds,
    bpm: s.bpm,
    instAnalysers: s.analysers,
    length: s.patterns,
    isPlaying: s.isPlaying,
  }));
  const {
    sounds,
    bpm,
    instAnalysers,
    length,
    isPlaying,
  } = state;

  const analyser = sounds.context.createAnalyser();
  const sampleBuffer = new Float32Array(analyser.fftSize);
  const limiter = new Tone.Limiter(-3);
  const volume = new Tone.Volume({ volume: 0 });
  Tone.Destination.chain(volume, limiter, analyser);
  volMeters.masterMeter(analyser, sampleBuffer);
  instAnalysers.forEach((a) => {
    volMeters.mixMeter(a.analyser, a.sampleBuffer, a.instrument);
  });

  const playBtn = () => {
    if (isPlaying) {
      return;
    }
    Tone.start();
    configLoop(bpm, sounds, length);
    dispatch(actions.isPlaying(true));
  };
  const stopBtn = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    const lights = document.querySelectorAll('.seq-light');
    lights.forEach((light) => light.classList.remove('on'));
    dispatch(actions.isPlaying(false));
  };

  return (
    <div>
      <div id="main-master-btns">
        <MainMasterFader volume={volume} />
      </div>

      <div id="main-transport">
        <button
          id="main-transport-play"
          type="button"
          onClick={playBtn}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </button>
        <button
          id="main-transport-stop"
          type="button"
          onClick={stopBtn}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-stop-fill" viewBox="0 0 16 16">
            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Transport;
