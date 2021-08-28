/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Tone from 'tone';

import '../../../styles/Test.css';
import actions from '../../../redux/actions/index';
import InstMixMeter from '../../mix_panel/InstMixMeter.jsx';
import InstChannel from '../../mix_panel/InstChannel.jsx';

const Sampler = () => {
  const dispatch = useDispatch();
  const sample = useSelector((state) => state.samplers);


  const keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
  const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  let octave = 3;

  let played;

  const time = Tone.Time(0.1);

  const keyDown = (e) => {
    if (e.repeat) return;
    const k = e.key;
    const keyIndex = keys.indexOf(k);
    played = document.querySelector(`#${notes[keyIndex]}-${sample}`);
    if (played) played.classList.add('pressed');
    if (keyIndex > -1) s.triggerAttackRelease(`${notes[keyIndex]}${octave}`, time);

    if (k === 'x' && octave < 6) {
      octave += 1;
    } else if (k === 'z' && octave !== 1) {
      octave -= 1;
    }
    // e.stopImmediatePropagation();
  };

  const keyUp = () => {
    if (played) played.classList.remove('pressed');
  };
  useEffect(async () => {
  const key = document.querySelector('.key');

    key.removeEventListener('keydown', keyDown);
    key.removeEventListener('keyup', keyUp);
    key.addEventListener('keydown', keyDown);
    key.addEventListener('keyup', keyUp);
    key.focus();
  }, [sample]);

  const s = new Tone.Sampler({
    urls: { C3: `${sample}.wav` },
    baseUrl: './samples/',
  });

  const channel = new Tone.Channel({
    volume: -12,
    pan: 0,
    solo: false,
    mute: false,
  });
  const analyser = s.context.createAnalyser();
  const sampleBuffer = new Float32Array(analyser.fftSize);
  s.chain(channel, analyser, Tone.Destination);
  dispatch(actions.analysers(analyser, sampleBuffer, sample));

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
      {/* <div className="sampler-inst">
        <button
          type="button"
          onClick={() => {
            s.triggerAttackRelease(['G3'], time);
          }}
        >
          Sampler
        </button>
        {Controls('main')}
      </div> */}
      <div className="mix-panel-sampler hidden">
        <InstMixMeter inst={sample} />
        <InstChannel controls={Controls} />
      </div>
      <div className="piano">
        {notes.map((note, i) => (
          <div
            tabIndex="0"
            key={note}
            id={`${note}-${sample}`}
            className={note.length > 1 ? 'key black' : 'key white'}
            onClick={() => s.triggerAttackRelease(`${note}${octave}`, 5)}
          />
        ))}
      </div>
    </>
  );
};

export default Sampler;
