'use strict';

const lodash = require('lodash');
const Defaults = require('../defaults/defaults');
const Game = require('../table/game');
const Move = {
  command: function (vorpal, options) {
    vorpal
      .command('m ')
      .description('Outputs "bla bla bla " ')
      .action(move);
  }
}
let robotPosition = {};

function move(args, callback) {
  if(Game.getGame() && Game.getValid()) {
    robotPosition = Game.getRobot();
    console.log('Game robotPosition: ', robotPosition);
  }
  // this.log(Defaults.getRobot());
  // this.log(Defaults.getValid());
  callback();
}

module.exports = Move;
