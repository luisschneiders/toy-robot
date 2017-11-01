'use strict';

const lodash = require('lodash');
const Defaults = require('../defaults/defaults');
const Place = {
  command: function (vorpal, options) {
    vorpal
      .command('p <RequiredPositionX>, <RequiredPositionY>, <RequiredFace>')
      .description('Outputs "Requires Position X, Y and Face Direction. E.g. Type: PLACE 0 0 NORTH" ')
      .action(place);
  },
  isValid: function() {
    
  }
}

function place(args, callback) {
  let requiredPosition = chechInputIsValid(args.RequiredPositionX, args.RequiredPositionY);    
  let requiredDirection = checkFaceIsValid(args.RequiredFace);
  let data = {};
  // console.log('requiredPosition.positionX', requiredPosition.positionX);
  // console.log('requiredPosition.positionY', requiredPosition.positionY);
  // console.log('requiredDirection', requiredDirection.robotFace);

  if(requiredPosition.positionX && requiredPosition.positionY && requiredDirection.robotFace) {
    data.isValid = true;
    data.positionX = args.RequiredPositionX;
    data.positionY = args.RequiredPositionY;
    data.face = args.RequiredFace;
    Defaults.setRobot(data);
  }

  this.log(Defaults.getRobot());
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
