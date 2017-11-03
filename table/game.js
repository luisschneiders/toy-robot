'use strict';

const lodash = require('lodash');
const Defaults = require('../defaults/defaults');
const robot = {
  positionX: null,
  positionY: null,
  direction: null,
  previousDirection: null,
  compute: null
};

let start = false;
let isValid = false;
let move = {};

const Game = {
  setRobot: function(data) {
    robot.positionX = data.positionX;
    robot.positionY = data.positionY;
    robot.direction = data.direction;
    robot.previousDirection = data.previousDirection;
    robot.compute = data.compute;
  },
  getRobot: function() {
    return robot;
  },
  setGame: function(data) {
    start = data;
  },
  getGame: function() {
    return start;
  },
  setValid: function(data) {
    isValid = data;
  },
  getValid: function() {
    return isValid;
  },
  setMove: function(data) {
    move = data;
    switch(move.direction) {
      case 'NORTH':
        move.positionX = move.positionX + 0;
        move.positionY = move.positionY + move.compute;
        break;
      case 'EAST':
        move.positionX = move.positionX + move.compute;
        move.positionY = move.positionY + 0
        break;
      case 'SOUTH':
        move.positionX = move.positionX - move.compute;
        move.positionY = move.positionY - 1;
        break;
      case 'WEST':
        move.positionX = move.positionX - 1;
        move.positionY = move.positionY - move.compute;
        break;
    }
  },
  getMove: function() {
    return move;
  },
  chechPositionIsValid: function(valueX, valueY) {
    let positionX = lodash.includes(Defaults.getPosition(), valueX);
    let positionY = lodash.includes(Defaults.getPosition(), valueY);

    return {positionX, positionY};
  },
  checkDirectionIsValid: function(direction) {
    let robotDirection = lodash.includes(Defaults.getDirection(), direction);

    return {robotDirection};
  },
  predictMovement: function(imaginaryRobot) {
    let allowedPosition = {};

    this.setMove(imaginaryRobot);

    imaginaryRobot = this.getMove();
    allowedPosition = this.chechPositionIsValid(imaginaryRobot.positionX, imaginaryRobot.positionY);

    if(allowedPosition.positionX && allowedPosition.positionY) {
      return true;
    }
    return false;
  }
}

module.exports = Game;
