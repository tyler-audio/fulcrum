/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Tone from 'tone';

import '../../../styles/main_ui/Instruments/Instrument.css';
import actions from '../../../redux/actions/index';
import InstMixMeter from '../../mix_panel/InstMixMeter.jsx';
import InstChannel from '../../mix_panel/InstChannel.jsx';

const Instrument = ({ name }) => {
  const dispatch = useDispatch();

  const steps = [];

  for (let i = 0; i < 64; i += 1) {
    steps.push({
      step: i + 1,
    });
  }

  const active = (e) => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
    } else {
      e.target.classList.add('active');
    }
  };

  const sounds = useSelector((state) => state.sounds);
  const sound = sounds.player(name);

  const channel = new Tone.Channel({
    volume: -12,
    pan: 0,
    solo: false,
    mute: false,
  });

  useEffect(() => {
    const analyser = sound.context.createAnalyser();
    const sampleBuffer = new Float32Array(analyser.fftSize);
    sound.chain(channel, analyser, Tone.Destination);
    dispatch(actions.analysers(analyser, sampleBuffer, name));
  }, [sounds]);

  const time = Tone.Time(0.1);

  const Controls = (view) => (
    <div className={`controls-${view}`}>
      <div className={`${view}-knobs`}>

        <webaudio-knob
          onMouseOver={(e) => e.target.addEventListener('input', () => {
            channel.set({
              volume: e.target.value,
            });
          })}
          src="./knobs/Vintage_Knob.png"
          min="-64"
          max="0"
          value="-12"
          diameter={view === 'main' ? '30' : '64'}
        />
        <webaudio-knob
          onMouseOver={(e) => e.target.addEventListener('input', () => {
            channel.set({
              pan: e.target.value,
            });
          })}
          src="./knobs/Vintage_Knob.png"
          min="-1"
          max="1"
          step="0.1"
          value="0"
          diameter={view === 'main' ? '30' : '64'}
        />
      </div>
      <div className={`${view}-mute-solo`}>
        <button
          className={`${view}-solo`}
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
          className={`${view}-mute`}
          type="button"
          onClick={() => {
            channel.set({
              mute: !channel.mute,
            });
          }}
        >
          M
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div id="instrument-seq" className="main-inst">
        <button
          className="play-sound-btn"
          type="button"
          onMouseDown={(e) => {
            sound.start(time);
            e.target.classList.toggle('active');
          }}
          onMouseUp={(e) => e.target.classList.toggle('active')}
        >
          T
        </button>
        <span id="seq-steps">
          {steps.map((step, i) => (
            <button
              type="button"
              key={step.step}
              id={`step-0${i + 1}-${name}`}
              onClick={active}
              className="seq-step"
              value={`${name}`}
              sound={sound}
            >
              {step.step < 10 ? `0${step.step}` : step.step}
            </button>
          ))}
        </span>
        {Controls('main')}
      </div>
      <div className="mix-panel-inst">
        <InstMixMeter inst={name} />
      </div>
      <div className="mix-panel-inst hidden">
        <InstMixMeter inst={name} />
        <InstChannel controls={Controls} />
      </div>
    </>
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
