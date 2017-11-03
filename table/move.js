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
    gameIsOn = predictMovement(imaginaryRobot);

    if (gameIsOn) {
      Game.setMove(robotPosition);
      robotPosition = Game.getMove();
    } else {
      this.log(`Oh boy! we don't have parachute, if you go to this direction, you'll get hurt. Try another direction :)`);
    }
  }
  
  callback();
}

function predictMovement(imaginaryRobot) {
  let allowedPosition = {};
  Game.setMove(imaginaryRobot);
  imaginaryRobot = Game.getMove();
  allowedPosition = Game.chechPositionIsValid(imaginaryRobot.positionX, imaginaryRobot.positionY);
  if(allowedPosition.positionX && allowedPosition.positionY) {
    return true;
  }
  return false;
}

module.exports = Move;
