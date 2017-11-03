'use strict';

const lodash = require('lodash');
const Defaults = require('../defaults/defaults');
const Game = require('../table/game');
const Place = {
  command: function (vorpal, options) {
    vorpal
      .command('p <RequiredPositionX>, <RequiredPositionY>, <RequiredDirection>')
      .description('Outputs "Requires Position X, Y and Direction. E.g. Type: PLACE 0 0 NORTH" ')
      .action(place);
  }
}

function place(args, callback) {
  let requiredPosition = Game.chechPositionIsValid(args.RequiredPositionX, args.RequiredPositionY);
  let requiredDirection = Game.checkDirectionIsValid(args.RequiredDirection.toUpperCase());
  let robot = {};
  let status = false;

  if(requiredPosition.positionX && requiredPosition.positionY && requiredDirection.robotDirection) {
    robot.positionX = args.RequiredPositionX;
    robot.positionY = args.RequiredPositionY;
    robot.direction = args.RequiredDirection.toUpperCase();
    robot.previousDirection = args.RequiredDirection.toUpperCase();
    status = true;
    if (robot.direction == "NORTH" || robot.direction == "EAST") {
      robot.compute = 1;
    } else if(robot.direction == "WEST" || robot.direction == "SOUTH") {
      robot.compute = 0;
    }
    Game.setRobot(robot);
    Game.setGame(status);
    Game.setValid(status);
  } else {
    Game.setGame(status);
    Game.setValid(status);
  }
  callback();
}

module.exports = Place;
