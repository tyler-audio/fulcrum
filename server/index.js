/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
// const db = require('./database/index');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/fulcrum', routes);

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('Connected to server'));
