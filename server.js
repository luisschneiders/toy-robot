'use strict';

const vorpal = require('vorpal')();

const Place = require('./table/place');
const Move = require('./table/move');
const Left = require('./table/left');
const Right = require('./table/right');

vorpal
  .use(Place.command)
  .use(Move.command)
  .use(Left.command)
  .use(Right.command);

vorpal
  .delimiter('Toy Robot Simulator $')
  .show();
