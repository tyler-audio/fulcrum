/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('Connected to server'));
