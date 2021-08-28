/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as Tone from 'tone';

import '../styles/Test.css';

const Test = () => {
  // const whiteKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
  // const blackKeys = ['w', 'e', 't', 'y', 'u'];
  const samplers = useSelector((state) => state.samplers);
  const keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
  const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  let octave = 3;

  const s = new Tone.Sampler({
    urls: { C3: '808-01.wav' },
    baseUrl: './samples/',
  }).toDestination();

  let played;

  const addKeyUp = (e) => {
    if (e.repeat) return;
    const k = e.key;
    const keyIndex = keys.indexOf(k);
    played = document.querySelector(`#${notes[keyIndex]}`);
    if (played) played.classList.add('pressed');
    if (keyIndex > -1) s.triggerAttackRelease(`${notes[keyIndex]}${octave}`, 5);

    if (k === 'x' && octave < 6) {
      octave += 1;
    } else if (k === 'z' && octave !== 1) {
      octave -= 1;
    }
    e.stopImmediatePropagation();
  };

  const addKeyDown = () => {
    if (played) played.classList.remove('pressed');
  };

  console.log(samplers);
  useEffect(() => {
    console.log('render')
    document.removeEventListener('keydown', addKeyDown);
    document.removeEventListener('keyup', addKeyUp);
    document.addEventListener('keydown', addKeyDown);
    document.addEventListener('keyup', addKeyUp);
  }, [samplers]);

  return (
    <>
      <div className="piano hidden">
        {notes.map((note, i) => (
          <div
            id={note}
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

export default Test;
