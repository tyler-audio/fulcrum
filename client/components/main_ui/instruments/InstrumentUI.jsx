/* eslint-disable import/extensions */
import React from 'react';

import InstrumentList from './InstrumentList.jsx';
import SeqLights from './SeqLights.jsx';
import AddInstrument from './AddInstrument.jsx';
import PatternSelect from './PatternSelect.jsx';

export default () => (
  <>
    <InstrumentList />
    <SeqLights />
    <AddInstrument />
    <PatternSelect />
  </>
);
