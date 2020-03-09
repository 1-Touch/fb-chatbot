'use strict';

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use('/webhook/', require('./routes/webhook'));

// Sets server port and logs message on success
app.listen(port, () => console.log(`webhook is listening on port ${port}`));