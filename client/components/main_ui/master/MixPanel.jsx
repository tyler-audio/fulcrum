import React from 'react';

const MixPanel = () => (
  <button
    type="button"
    onClick={() => {
      const mainUI = document.querySelector('.main-inst');
      const mixPanel = document.querySelector('.mix-panel-inst');
      if (mixPanel.classList.contains('hidden')) {
        mixPanel.classList.remove('hidden');
        mainUI.classList.add('hidden');
      } else if (mainUI.classList.contains('hidden')) {
        mainUI.classList.remove('hidden');
        mixPanel.classList.add('hidden');
      }
    }}
  >
    Mix Panel
  </button>
);

export default MixPanel;
