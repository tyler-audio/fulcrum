/* eslint-disable import/extensions */
import React from 'react';

import InstrumentList from './instruments/InstrumentList.jsx';
import AddInstrument from './instruments/AddInstrument.jsx';
import SeqLights from './SeqLights.jsx';
import MainMaster from './master/MainMaster.jsx';

const Main = () => (
  <div>
    <InstrumentList />
    <SeqLights />
    <AddInstrument />
    <MainMaster />
  </div>
);

export default Main;
