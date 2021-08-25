/* eslint-disable import/extensions */
import React from 'react';

import '../../styles/main_ui/SeqLights.css';

const SeqLights = () => {
  const lights = [];

  for (let i = 0; i < 16; i += 1) {
    lights.push({
      light: 'off',
      id: i,
    });
  }

  return (
    <div>
      {lights.map((light, i) => (
        <div
          key={light.id}
          id={`light-${i}`}
          className="seq-light"
        >
          {`light${i + 1}`}
        </div>
      ))}
    </div>
  );
};

export default SeqLights;
