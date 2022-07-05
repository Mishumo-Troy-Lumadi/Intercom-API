const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

let app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(require('./router'))

module.exports = app;
