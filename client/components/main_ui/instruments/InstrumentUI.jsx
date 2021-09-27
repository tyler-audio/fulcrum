/* eslint-disable import/extensions */
import React from 'react';

import InstrumentList from './InstrumentList.jsx';
import SeqLights from './SeqLights.jsx';
import AddInstrument from './AddInstrument.jsx';
// import PatternSelect from './PatternSelect.jsx';

import '../../../styles/main_ui/Instruments/InstrumentUI.css';

export default () => (
  <div id="main-ui-inst">
    <div id="inst-ui-list">
      <InstrumentList />
    </div>
    <SeqLights />
    <div id="inst-ui-btns">
      <AddInstrument />
      {/* <PatternSelect /> */}
    </div>
  </div>
);
