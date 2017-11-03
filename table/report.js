'use strict';

const Game = require('../table/game');

const Report = {
  command: function (vorpal, options) {
    vorpal
      .command('REPORT ')
      .description('Outputs "Type REPORT to display toy robot position and direction" ')
      .action(report);
  }
}

let robot = {};

function report(args, callback) {
  if(Game.getGame() && Game.getValid()) {
    robot = Game.getRobot();
    this.log(robot.positionX + ", ", robot.positionY + ",", robot.direction);
  }
  callback();
}

module.exports = Report;
