/* eslint-disable import/extensions */
import React from 'react';

import InstrumentList from './InstrumentList.jsx';
import SeqLights from './SeqLights.jsx';
import AddInstrument from './AddInstrument.jsx';

export default () => (
  <div id="instrument-ui">
    <div id="instrument-list">
      <InstrumentList />
    </div>
    <SeqLights />
    <AddInstrument />
  </div>
);
