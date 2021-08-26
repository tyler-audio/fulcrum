/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Tone from 'tone';

import actions from '../redux/actions/index';
import Main from './main_ui/main.jsx';

const App = () => {
  const dispatch = useDispatch();

  const instruments = useSelector((state) => state.instruments);

  const baseURL = './samples/';
  const options = {};
  instruments.forEach((inst) => {
    options[inst] = `${baseURL}${inst}.wav`;
  });

  const sounds = new Tone.Players(options);
  dispatch(actions.sounds(sounds));

  return (
    <>
      <div id="title-screen">
        <div>FULCRUM</div>
        <button
          id="title-enter"
          type="button"
          onClick={() => {
            Tone.start();
            const root = document.querySelector('#root');
            const title = document.querySelector('#title-screen');
            const main = document.querySelector('#main');
            title.classList.add('hidden');
            root.classList.remove('home');
            main.classList.remove('hidden');
          }}
        >
          ENTER
        </button>
      </div>
      <Main />
    </>
  );
};

export default App;
