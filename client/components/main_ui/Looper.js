/* eslint-disable no-param-reassign */
// import React from 'react';
// import { useSelector } from 'react-redux';
import * as Tone from 'tone';

const configLoop = (bpm, sounds, length) => {
  let index = 0;

  const repeat = (time) => {
    const currentStep = index % (length * 16);
    const currentLight = index % 16;
    const steps = document.querySelectorAll('.seq-step');
    steps.forEach((step) => {
      const file = step.attributes[3].value;
      if (step.id === `step-0${currentStep + 1}-${file}` && step.classList.contains('active')) {
        sounds.player(file).start(time);
      }
    });

    const lights = document.querySelectorAll('.seq-light');
    lights.forEach((light) => {
      if (light.id === `light-${currentLight}`) {
        light.classList.add('on');
      } else {
        light.classList.remove('on');
      }
    });
    index += 1;
  };
  Tone.Transport.bpm.value = bpm;
  Tone.Transport.scheduleRepeat(repeat, '16n');
  Tone.Transport.start();
};

export default configLoop;
