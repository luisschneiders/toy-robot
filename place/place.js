'use strict';

const lodash = require('lodash');
let position = [0, 1, 2, 3, 4];
let direction = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'north', 'south', 'east', 'west'];
let iRobot = {
  isValid: null,
  requiredPosition: {
    positionX: null,
    positionY: null
  },
  requiredDirection: {
    face: null
  }
};
function place(args, callback) {
  let requiredPosition = chechInputIsValid(args.RequiredPositionX, args.RequiredPositionY);    
  let requiredDirection = checkFaceIsValid(args.RequiredFace);

  // console.log('requiredPosition.positionX', requiredPosition.positionX);
  // console.log('requiredPosition.positionY', requiredPosition.positionY);
  // console.log('requiredDirection', requiredDirection.robotFace);

  if (requiredPosition.positionX && requiredPosition.positionY && requiredDirection.robotFace) {
    iRobot.isValid = true;
    iRobot.requiredPosition.positionX = args.RequiredPositionX;
    iRobot.requiredPosition.positionY = args.RequiredPositionY;
    iRobot.requiredDirection.face = args.RequiredFace;
  }

  this.log(iRobot);
  callback();
}
function chechInputIsValid(valueX, valueY) {
  let positionX = lodash.includes(position, valueX);
  let positionY = lodash.includes(position, valueY);
  return {positionX, positionY};
}
function checkFaceIsValid(face) {
  let robotFace = lodash.includes(direction, face);
  return {robotFace};
}
module.exports = function (vorpal, options) {
  vorpal
    .command('p <RequiredPositionX>, <RequiredPositionY>, <RequiredFace>')
    .description('Outputs "Requires Position X, Y and Face Direction. E.g. Type: PLACE 0 0 NORTH" ')
    .action(place);
}
