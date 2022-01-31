// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
// import React from 'react';
// import * as Tone from 'tone';

// import '../styles/Test.css';

// const Test = () => {
//   // const whiteKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
//   // const blackKeys = ['w', 'e', 't', 'y', 'u'];
//   const keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
//   const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
//   let octave = 3;

//   const s = new Tone.Sampler({
//     urls: { C3: '808-01.wav' },
//     baseUrl: './samples/',
//   }).toDestination();

//   let played;

//   document.addEventListener('keydown', (e) => {
//     if (e.repeat) return;
//     const k = e.key;
//     const keyIndex = keys.indexOf(k);
//     played = document.querySelector(`#${notes[keyIndex]}`);
//     if (played) played.classList.add('pressed');
//     if (keyIndex > -1) s.triggerAttackRelease(`${notes[keyIndex]}${octave}`, 5);

//     if (k === 'x' && octave < 6) {
//       octave += 1;
//     } else if (k === 'z' && octave !== 1) {
//       octave -= 1;
//     }
//     e.stopImmediatePropagation();
//   });

//   document.addEventListener('keyup', () => {
//     if (played) played.classList.remove('pressed');
//   });

//   return (
//     <>
//       <div className="piano hidden">
//         {notes.map((note, i) => (
//           <div
//             id={note}
//             className={note.length > 1 ? 'key black' : 'key white'}
//             onClick={() => s.triggerAttackRelease(`${note}${octave}`, 5)}
//           >
//             {keys[i]}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Test;
