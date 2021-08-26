/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../../styles/main_ui/Instruments/AddInstrument.css';
import '../../../styles/Modal.css';

import data from '../../../lib/Inst/index';
import actions from '../../../redux/actions/index';

const AddInstrument = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState('');
  // const [instType, setInstType] = useState('');

  const handleModal = () => {
    const modal = document.querySelector('#add-inst-modal');
    const overlay = document.querySelector('#add-inst-overlay');

    if (modal.classList.contains('active') && overlay.classList.contains('active')) {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    } else {
      modal.classList.add('active');
      overlay.classList.add('active');
    }
  };

  // Modal box
  return (
    <div>
      <button id="add-inst-button" type="button" onClick={handleModal}>ADD INSTRUMENT</button>
      <div id="add-inst-modal">
        <div id="add-inst-header">
          <div id="add-inst-title">SELECT INSTRUMENT</div>
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
                        const selType = document.querySelector('#selected-type');
                        selType.innerHTML = e.target.innerHTML;
                        setSelectedType(e.target.innerHTML);
                        // setInstType(type);
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
          <ul id="add-file-menu">
            {selectedType !== '' && data.instFiles[selectedType].map((file) => (
              <li
                key={file}
                className="add-inst-file"
                onClick={(e) => {
                  // if (instType === 'synth') {
                  //   dispatch(actions.samplers(e.target.innerHTML));
                  // } else {
                  dispatch(actions.instruments(e.target.innerHTML));
                  // }
                }}
              >
                {file}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={handleModal}
          >
            SELECT
          </button>
        </div>
      </div>
      <div onClick={handleModal} id="add-inst-overlay" />
    </div>
  );
};

export default AddInstrument;
