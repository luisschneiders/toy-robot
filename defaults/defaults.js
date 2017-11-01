const robot = {
  isValid: null,
  requiredPosition: {
    positionX: null,
    positionY: null
  },
  requiredDirection: {
    face: null
  }
};
const position = [0, 1, 2, 3, 4];
const direction = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'north', 'south', 'east', 'west'];

const Defaults = {
  setRobot: function(data) {
    robot.isValid = data.isValid;
    robot.requiredPosition.positionX = data.positionX;
    robot.requiredPosition.positionY = data.positionY;
    robot.requiredDirection.face = data.face;
  },  
  getRobot: function() {
    return robot;    
  },
  getPosition: function() {
    return position;
  },
  getDirection: function() {
    return direction;
  }
};

module.exports = Defaults;
