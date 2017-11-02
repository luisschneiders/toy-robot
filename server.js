'use strict';

const vorpal = require('vorpal')();
const Defaults = require('./defaults/defaults');
const Game = require('./table/game');
const Place = require('./table/place');
const Move = require('./table/move');


vorpal
  .use(Place.command)
  .use(Move.command);

vorpal
  .delimiter('Toy Robot Simulator $')
  .show();
