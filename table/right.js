'use strict';

const lodash = require('lodash');
const Game = require('../table/game');
const Defaults = require('../defaults/defaults');

let robot = {};
let direction = null;

const Right = {
  command: function (vorpal, options) {
    vorpal
      .command('r ')
      .description('Outputs "Type RIGHT to change direction" ')
      .action(right);
  }
}

function right(args, callback) {
  if(Game.getGame() && Game.getValid()) {
    robot = Game.getRobot();
    direction = robot.direction;
    robot.previousDirection = robot.direction;
    robot.direction = Defaults.getRight(direction);
    if (robot.direction == "NORTH" || robot.direction == "EAST") {
      robot.compute = 1;
    } else if(robot.direction == "WEST" || robot.direction == "SOUTH") {
      robot.compute = 0;      
    }

    // console.log('robot direction: ', direction);
    // console.log('Game robot : ', robot);
  }
  // this.log(Defaults.getRobot());
  // this.log(Defaults.getValid());
  callback();
}

module.exports = Right;
