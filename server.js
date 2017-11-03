'use strict';

const vorpal = require('vorpal')();

const Place = require('./table/place');
const Move = require('./table/move');
const Left = require('./table/left');
const Right = require('./table/right');
const Report = require('./table/report');

vorpal
  .use(Place.command)
  .use(Move.command)
  .use(Left.command)
  .use(Right.command)
  .use(Report.command);;

vorpal
  .delimiter('Toy Robot Simulator $')
  .show();
