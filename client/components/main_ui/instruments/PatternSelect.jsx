/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../../redux/actions/index';

const PatternSelect = () => {
  const dispatch = useDispatch();
  // const [selPattern, setSelPattern] = useState('P1');
  const length = useSelector((state) => state.patterns);

  const patterns = ['P1', 'P2', 'P3', 'P4'];

  const handleModal = () => {
    const settings = document.querySelector('#settings-modal');
    const overlay = document.querySelector('#settings-overlay');
    if (settings.classList.contains('active') && overlay.classList.contains('active')) {
      settings.classList.remove('active');
      overlay.classList.remove('active');
    } else {
      settings.classList.add('active');
      overlay.classList.add('active');
    }
  };

  const handleChange = (e) => {
    const l = Number(e.target.value);
    dispatch(actions.patterns(l));
  };

  // const patternL = document.getElementById('pattern-left');
  // if (length === 1 || selPattern === 'P1') {
  //   patternL.classList.add('disabled');
  // } else if (length > 1 && selPattern !== 'P1') {
  //   patternL.classList.remove('disabled');
  // }
  // const patternR = document.querySelector('#pattern-R');
  // if (length === 1 || selPattern === 'P4') {
  //   patternR.classList.add('disabled');
  // } else if (length > 1 && selPattern !== 'P4') {
  //   patternR.classList.remove('disabled');
  // }

  // NEED TO IMPLEMENT SCROLL FEATURE FOR BUTTONS DURING CSS STYLING
  return (
    <div>
      <button
        id="pattern-left"
        type="button"
        className="disabled"
        // onClick={() => {
        //   const p = selPattern[1];
        //   setSelPattern(`P${p - 1}`);
        // }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
        </svg>
      </button>
      <div>
        {patterns.map((pattern) => (
          <span
            className="pattern-playing"
            key={`playing-${pattern}`}
          >
            {pattern}
          </span>
        ))}
      </div>
      <div>
        {patterns.map((pattern) => (
          <span
            key={`viewing-${pattern}`}
            className="pattern-viewing"
          >
            {pattern}
          </span>
        ))}
      </div>
      <button
        id="pattern-R"
        type="button"
        className="disabled"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
        </svg>
      </button>
      <button
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
          onChange={handleChange}
        >
          {patterns.map((pattern, i) => (
            <option key={pattern} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        <button onClick={handleModal} type="submit">Ok</button>
      </div>
      <div onClick={handleModal} id="settings-overlay" />
    </div>
  );
};

export default PatternSelect;
