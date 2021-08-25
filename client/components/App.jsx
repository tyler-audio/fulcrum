/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Tone from 'tone';

import '../styles/App.css';
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
    <div>
      <div>FULCRUM_TITLE</div>
      <button type="button" onClick={() => Tone.start()}>START</button>
      <Main />
    </div>
  );
};

export default App;
