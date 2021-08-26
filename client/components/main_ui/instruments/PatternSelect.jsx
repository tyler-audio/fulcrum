/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../../redux/actions/index';

const PatternSelect = () => {
  const dispatch = useDispatch();
  const [selPattern, setSelPattern] = useState('P1');
  const instruments = useSelector((state) => state.instruments);
  const length = useSelector((state) => state.patterns);

  const patterns = ['P1', 'P2', 'P3', 'P4'];

  const handleModal = () => {
    const settings = document.querySelector('#settings-modal');
    const overlay = document.querySelector('#settings-overlay');
    settings.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  const handleChange = (e) => {
    const l = Number(e.target.value);
    dispatch(actions.patterns(l));
  };
  // const instSeq = document.querySelectorAll('#seq-steps');

  // const handleScroll = (e) => {
  //   console.log(e.target.id);
  //   if (e.target.id === 'pattern-left') {
  //     console.log('left')
  //     for (let i = 0; i < instSeq.length; i += 1) {
  //       instSeq[i].scrollLeft -= 778;
  //     }
  //   }
  //   if (e.target.id === 'pattern-right') {
  //     console.log('right')
  //     for (let i = 0; i < instSeq.length; i += 1) {
  //       instSeq[i].scrollLeft += 778;
  //     }
  //   }
  // };

  // NEED TO IMPLEMENT SCROLL FEATURE FOR BUTTONS DURING CSS STYLING
  if (instruments.length !== 0) {
    return (
      <div id="pattern-select">
        <button
          id="pattern-left"
          type="button"
          className={length === 1 || selPattern === 'P1' ? 'disabled' : ''}
          // onMouseDown={(e) => handleScroll(e)}
          onClick={() => {
            let p = selPattern[1];
            p = Number(p);
            setSelPattern(`P${p - 1}`);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
          </svg>
        </button>
        <div id="pattern-sel-lights">
          <div>
            {patterns.map((pattern, i) => (
              <span
                className={Number(selPattern[1]) === i + 1 ? 'pattern-playing active' : 'pattern-playing'}
                key={`playing-${pattern}`}
              >
                {pattern}
              </span>
            ))}
          </div>
          <div>
            {patterns.map((pattern, i) => (
              <span
                id={i}
                key={`viewing-${pattern}`}
                className="pattern-viewing"
              >
                {pattern}
              </span>
            ))}
          </div>
        </div>
        <button
          id="pattern-right"
          type="button"
          className={length === 1 || selPattern === `P${length}` ? 'disabled' : ''}
          // onMouseDown={(e) => handleScroll(e)}
          onClick={() => {
            let p = selPattern[1];
            p = Number(p);
            setSelPattern(`P${p + 1}`);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
          </svg>
        </button>
        <button
          id="settings-modal-btn"
          type="button"
          onClick={handleModal}
        >
          SETTINGS
        </button>
        <div
          id="settings-modal"
        >
          <select
            value={length}
            name="length"
            id="settings-drop"
            onChange={(e) => {
              handleChange(e);
              handleModal();
            }}
          >
            {patterns.map((pattern, i) => (
              <option key={pattern} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div onClick={handleModal} id="settings-overlay" />
      </div>
    );
  }
  return <></>;
};

export default PatternSelect;
