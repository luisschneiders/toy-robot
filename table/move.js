'use strict';

const lodash = require('lodash');
const Game = require('../table/game');
const Defaults = require('../defaults/defaults');

const Move = {
  command: function (vorpal, options) {
    vorpal
      .command('m ')
      .description('Outputs "Type MOVE to change robot\'s position" ')
      .action(move);
  }
}

let gameIsOn = false;
let imaginaryRobot = {};
let robotPosition = {};

function move(args, callback) {
  if(Game.getGame() && Game.getValid()) {
    robotPosition = Game.getRobot();

    imaginaryRobot = Object.assign({}, robotPosition);
    gameIsOn = Game.predictMovement(imaginaryRobot);

    if (gameIsOn) {
      Game.setMove(robotPosition);
      robotPosition = Game.getMove();
    } else {
      this.log(Defaults.getWarning());
    }
  }
  
  callback();
}

module.exports = Move;
