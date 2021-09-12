/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Tone from 'tone';

// import '../../../styles/Test.css';
import actions from '../../../redux/actions/index';
import InstMixMeter from '../../mix_panel/InstMixMeter.jsx';
import InstChannel from '../../mix_panel/InstChannel.jsx';

const Sampler = () => {
  const dispatch = useDispatch();
  const sample = useSelector((state) => state.samplers);

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
    e.stopImmediatePropagation();
  };

  const keyUp = () => {
    if (played) played.classList.remove('pressed');
  };

  document.removeEventListener('keydown', keyDown);
  document.removeEventListener('keyup', keyUp);

  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);

  const Controls = (view) => (
    <div id={`controls-${view}`}>
      <webaudio-knob
        onMouseOver={(e) => e.target.addEventListener('input', () => {
          channel.set({
            volume: e.target.value,
          });
        })}
        src="./knobs/Vintage_Knob.png"
        min="-64"
        max="0"
        defvalue="-12"
        diameter="64"
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
        defvalue="0"
        diameter="64"
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
    </div>
  );

  return (
    <>
      <div className="sampler-inst">
        <button
          type="button"
          onClick={() => {
            s.triggerAttackRelease(['G3'], time);
          }}
        >
          Sampler
        </button>
        {Controls('main-controls')}
      </div>
      <div className="mix-panel-sampler hidden">
        <InstMixMeter inst={sample} />
        <InstChannel controls={Controls} />
      </div>
      <div className="piano">
        {notes.map((note, i) => (
          <div
            key={note}
            id={`${note}-${sample}`}
            className={note.length > 1 ? 'key black' : 'key white'}
            onClick={() => s.triggerAttackRelease(`${note}${octave}`, 5)}
          >
            {keys[i]}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sampler;
