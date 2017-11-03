const position = [0, 1, 2, 3, 4];
const direction = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const Defaults = {
  getWarning: function() {
    return `Oh boy! we don't have parachute, if you go to this direction, you'll get hurt.  Try another direction :)`;
  },
  getPosition: function() {
    return position;
  },
  getDirection: function() {
    return direction;
  },
  getLeft: function(value) {
    switch(value) {
      case 'NORTH':
        value = direction[3];
        break;
      case 'EAST':
        value = direction[0];
        break;
      case 'SOUTH':
        value = direction[1];
        break;
      case 'WEST':
        value = direction[2];
        break;
    }
    return value;
  },
  getRight: function(value) {
    switch(value) {
      case 'NORTH':
        value = direction[1];
        break;
      case 'EAST':
        value = direction[2];
        break;
      case 'SOUTH':
        value = direction[3];
        break;
      case 'WEST':
        value = direction[0];
        break;
    }
    return value;
  }
};

module.exports = Defaults;
