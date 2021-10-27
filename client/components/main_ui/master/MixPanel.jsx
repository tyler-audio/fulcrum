import React from 'react';

const MixPanel = () => {
  const togglePanel = (e) => {
    const mainInst = document.querySelectorAll('.main-inst');
    const mixPanelInst = document.querySelectorAll('.mix-panel-inst');
    const instBtns = document.querySelector('#inst-ui-btns');
    const seqLights = document.querySelector('#seq-lights');

    mixPanelInst.forEach((inst) => {
      inst.classList.toggle('hidden');
      inst.classList.toggle('activated');
    });
    mainInst.forEach((inst) => {
      inst.classList.toggle('hidden');
    });
    instBtns.classList.toggle('hidden');
    seqLights.classList.toggle('hidden');

    const instUiList = document.querySelector('#inst-ui-list');
    instUiList.classList.toggle('mix-mode');

    const instTitle = document.querySelectorAll('#inst-title');
    instTitle.forEach((title) => {
      title.classList.toggle('center');
    });

    if (e.target.innerHTML === 'Mix Panel') {
      e.target.innerHTML = 'Sequencer';
    } else {
      e.target.innerHTML = 'Mix Panel';
    }
  };

  return (
    <button
      id="mix-panel-btn"
      type="button"
      onClick={togglePanel}
    >
      Mix Panel
    </button>
  );
};

export default MixPanel;
