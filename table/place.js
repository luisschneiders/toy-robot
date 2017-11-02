'use strict';

const lodash = require('lodash');
const Defaults = require('../defaults/defaults');
const Game = require('../table/game');
const Place = {
  command: function (vorpal, options) {
    vorpal
      .command('p <RequiredPositionX>, <RequiredPositionY>, <RequiredFace>')
      .description('Outputs "Requires Position X, Y and Face Direction. E.g. Type: PLACE 0 0 NORTH" ')
      .action(place);
  }
}

function place(args, callback) {
  let requiredPosition = chechInputIsValid(args.RequiredPositionX, args.RequiredPositionY);    
  let requiredDirection = checkFaceIsValid(args.RequiredFace);
  let robot = {};
  let status = false;

  if(requiredPosition.positionX && requiredPosition.positionY && requiredDirection.robotFace) {
    robot.positionX = args.RequiredPositionX;
    robot.positionY = args.RequiredPositionY;
    robot.face = args.RequiredFace;
    status = true;
    Game.setRobot(robot);
    Game.setGame(status);
    Game.setValid(status);
  } else {
    Game.setGame(status);    
    Game.setValid(status);
  }
  this.log(Game.getGame());
  callback();
}
function chechInputIsValid(valueX, valueY) {
  let positionX = lodash.includes(Defaults.getPosition(), valueX);
  let positionY = lodash.includes(Defaults.getPosition(), valueY);

  return {positionX, positionY};
}
function checkFaceIsValid(face) {
  let robotFace = lodash.includes(Defaults.getDirection(), face);
  
  return {robotFace};
}

module.exports = Place;
