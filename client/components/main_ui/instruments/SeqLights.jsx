/* eslint-disable import/extensions */
import React from 'react';
import { useSelector } from 'react-redux';

import '../../../styles/main_ui/SeqLights.css';

const SeqLights = () => {
  const instruments = useSelector((state) => state.instruments);
  const lights = [];

  for (let i = 0; i < 16; i += 1) {
    lights.push({
      light: 'off',
      id: i,
    });
  }
  if (instruments.length !== 0) {
    return (
      <div id="seq-lights">
        {lights.map((light, i) => (
          <span
            key={light.id}
            id={`light-${i}`}
            className="seq-light"
          />
        ))}
      </div>
    );
  }
  return <></>;
};

export default SeqLights;
