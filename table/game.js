'use strict';

const Defaults = require('../defaults/defaults');
const robot = {
  requiredPosition: {
    positionX: null,
    positionY: null
  },
  direction: null,
  previousDirection: null
};

let start = false;
let isValid = false;
let move = {};

const Game = {
  setRobot: function(data) {
    robot.requiredPosition.positionX = data.positionX;
    robot.requiredPosition.positionY = data.positionY;
    robot.direction = data.direction;
    robot.previousDirection = data.previousDirection;
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
  setMoveX: function(data) {
    // let direction = null;
    move = data;
    // direction = move.direction.toUpperCase();
    // console.log('direction', direction);
    switch(move.direction) {
      case 'NORTH':
        move.requiredPosition.positionX = move.requiredPosition.positionX + 1;
        // move.requiredPosition.positionY = move.requiredPosition.positionY + 1;
        break;
      case 'EAST':
        move.requiredPosition.positionX = move.requiredPosition.positionX + 1;
        // move.requiredPosition.positionY = move.requiredPosition.positionY + 1;
        break;
      case 'SOUTH':
        move.requiredPosition.positionX = move.requiredPosition.positionX - 1;
        // move.requiredPosition.positionY = move.requiredPosition.positionY - 1;
        break;
      case 'WEST':
        move.requiredPosition.positionX = move.requiredPosition.positionX - 1;
        // move.requiredPosition.positionY = move.requiredPosition.positionY - 1;
        break;        
    }
  },
  getMoveX: function() {
    return move;
  },
  setMoveY: function(data) {
    // let direction = null;
    move = data;
    // direction = move.direction.toUpperCase();
    // console.log('direction', direction);
    switch(move.direction) {
      case 'NORTH':
        // move.requiredPosition.positionX = move.requiredPosition.positionX + 1;
        move.requiredPosition.positionY = move.requiredPosition.positionY + 1;
        break;
      case 'EAST':
        // move.requiredPosition.positionX = move.requiredPosition.positionX + 1;
        move.requiredPosition.positionY = move.requiredPosition.positionY + 1;
        break;
      case 'SOUTH':
        // move.requiredPosition.positionX = move.requiredPosition.positionX - 1;
        move.requiredPosition.positionY = move.requiredPosition.positionY - 1;
        break;
      case 'WEST':
        // move.requiredPosition.positionX = move.requiredPosition.positionX - 1;
        move.requiredPosition.positionY = move.requiredPosition.positionY - 1;
        break;        
    }
  },
  getMoveY: function() {
    return move;
  }  

}

module.exports = Game;
