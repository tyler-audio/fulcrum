import React from 'react';

const MixPanel = () => (
  <button
    type="button"
    onClick={() => {
      const mainInst = document.querySelector('.main-inst');
      const mixPanelInst = document.querySelector('.mix-panel-inst');
      const sampleInst = document.querySelector('.sampler-inst');
      const mixPanelSampler = document.querySelector('.mix-panel-sampler');

      if (mixPanelInst.classList.contains('hidden') && mixPanelSampler.classList.contains('hidden')) {
        mixPanelInst.classList.remove('hidden');
        mixPanelSampler.classList.remove('hidden');

        mainInst.classList.add('hidden');
        sampleInst.classList.add('hidden');
      } else if (mainInst.classList.contains('hidden') && sampleInst.classList.contains('hidden')) {
        mainInst.classList.remove('hidden');
        sampleInst.classList.remove('hidden');

        mixPanelInst.classList.add('hidden');
        mixPanelSampler.classList.add('hidden');
      }
    }}
  >
    Mix Panel
  </button>
);

export default MixPanel;
