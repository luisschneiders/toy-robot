'use strict';

const lodash = require('lodash');
const Game = require('../table/game');
const Defaults = require('../defaults/defaults');

let robot = {};
let direction = null;

const Left = {
  command: function (vorpal, options) {
    vorpal
      .command('l')
      .description('Outputs "Type LEFT to change direction" ')
      .action(left);
  }
}

function left(args, callback) {
  if(Game.getGame() && Game.getValid()) {
    robot = Game.getRobot();
    direction = robot.direction;
    robot.previousDirection = robot.direction;
    robot.direction = Defaults.getLeft(direction);
    if (robot.direction == "NORTH" || robot.direction == "EAST") {
      robot.compute = 1;
    } else if(robot.direction == "WEST" || robot.direction == "SOUTH") {
      robot.compute = 0;      
    }
  }
  // this.log(Defaults.getRobot());
  // this.log(Defaults.getValid());
  callback();
}

module.exports = Left;
