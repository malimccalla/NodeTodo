'use strict';

const config = require('./config');

const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('NodeToDo');
});

mongoose.connect(config.getDbConnectionString);

app.listen(port);
