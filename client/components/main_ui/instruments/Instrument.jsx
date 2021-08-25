/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Tone from 'tone';

import '../../../styles/main_ui/SeqLights.css';
import actions from '../../../redux/actions/index';
import InstMixMeter from '../../mix_panel/InstMixMeter.jsx';

const Instrument = ({ name }) => {
  const dispatch = useDispatch();

  const steps = [];

  for (let i = 0; i < 16; i += 1) {
    steps.push({
      step: i + 1,
    });
  }

  const pattern = [];
  const active = (e) => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
    } else {
      e.target.classList.add('active');
    }
    const stepID = e.target.id.slice(e.target.id.length - 2);
    pattern.push(stepID);
    dispatch(actions.patterns(pattern));
  };

  const sounds = useSelector((state) => state.sounds);
  const sound = sounds.player(name);

  const channel = new Tone.Channel({
    volume: 0,
    pan: 0,
    solo: false,
    mute: false,
  });
  const analyser = sound.context.createAnalyser();
  const sampleBuffer = new Float32Array(analyser.fftSize);
  sound.chain(channel, analyser, Tone.Destination);

  const time = Tone.Time(0.1);

  // create a div for each step in sequencer
  // eventually make spans into buttons? airbnb
  return (
    <div>
      <button
        type="button"
        onClick={() => sound.start(time)}
      >
        TEST
      </button>
      {steps.map((step, i) => (
        <span
          key={step.step}
          id={`step-0${i + 1}-${name}`}
          onClick={active}
          className="seq-step"
          value={`${name}`}
          sound={sound}
        >
          {step.step}
        </span>
      ))}
      <input
        type="range"
        min="-100"
        max="0"
        step="0.5"
        onChange={(e) => {
          channel.set({
            volume: e.target.value,
          });
        }}
      />
      <input
        type="range"
        min="-1"
        max="1"
        step="0.1"
        onChange={(e) => {
          channel.set({
            pan: e.target.value,
          });
        }}
      />
      <button
        type="button"
        onClick={() => {
          channel.set({
            solo: !channel.solo,
          });
        }}
      >
        S
      </button>
      <button
        type="button"
        onClick={() => {
          channel.set({
            mute: !channel.mute,
          });
        }}
      >
        M
      </button>
      <InstMixMeter analyser={analyser} sampleBuffer={sampleBuffer} inst={name} />
    </div>
  );
};

Instrument.propTypes = {
  name: PropTypes.string,
  // sounds: PropTypes.objectOf(PropTypes.shape),
};

Instrument.defaultProps = {
  name: '',
  // sounds: {},
};

export default Instrument;
