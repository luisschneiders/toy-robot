'use strict';

const vorpal = require('vorpal')();
const Place = require('./place/place');

vorpal
  .use(Place.command);


vorpal
  .delimiter('Toy Robot Simulator $')
  .show();
