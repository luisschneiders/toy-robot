'use strict';

const robot = {
  requiredPosition: {
    positionX: null,
    positionY: null
  },
  requiredDirection: {
    face: null
  }
};

let start = false;
let isValid = false;

const Game = {
  setRobot: function(data) {
    robot.requiredPosition.positionX = data.positionX;
    robot.requiredPosition.positionY = data.positionY;
    robot.requiredDirection.face = data.face;
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
  }  
}

module.exports = Game;
