/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Tone from 'tone';

import data from '../../../lib/Inst/index';
import actions from '../../../redux/actions/index';

const AddInstrument = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState('');
  const isPlaying = useSelector((s) => s.isPlaying);

  const handleModal = () => {
    const modal = document.querySelector('#add-inst-modal');
    const overlay = document.querySelector('#add-inst-overlay');

    modal.classList.toggle('active');
    overlay.classList.toggle('active');

    setSelectedType('');
  };

  return (
    <div>
      <button
        id="add-inst-button"
        type="button"
        onClick={() => {
          handleModal();
          if (isPlaying) {
            Tone.Transport.stop();
            Tone.Transport.cancel();
          }
          const lights = document.querySelectorAll('.seq-light');
          lights.forEach((light) => light.classList.remove('on'));
          dispatch(actions.isPlaying(false));
        }}
      >
        ADD INSTRUMENT
      </button>
      <div id="add-inst-modal">
        <div id="add-inst-header">
          <div>SELECT INSTRUMENT</div>
          <button id="add-inst-close" type="button" onClick={handleModal}>&times;</button>
        </div>
        <div id="add-inst-body">
          <ul id="add-type-menu">
            {Object.keys(data.instTypes).map((type) => (
              <li key={type} className="add-inst-type">
                {type}
                <ul className="inst-subtype">
                  {data.instTypes[type].map((i) => (
                    <li
                      className="add-inst-subtype"
                      onClick={(e) => {
                        setSelectedType(e.target.innerHTML);
                      }}
                      key={i}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div id="selected-type" />
          {selectedType}
          <ul id="add-file-menu">
            {selectedType !== '' && data.instFiles[selectedType].map((file) => (
              <li
                key={file}
                className="add-inst-file"
                onClick={(e) => {
                  dispatch(actions.instruments(e.target.innerHTML));
                  handleModal();
                }}
              >
                {file}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div onClick={handleModal} id="add-inst-overlay" />
    </div>
  );
};

export default AddInstrument;
