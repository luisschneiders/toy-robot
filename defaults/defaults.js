const position = [0, 1, 2, 3, 4];
const direction = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'north', 'south', 'east', 'west'];

const Defaults = {
  getPosition: function() {
    return position;
  },
  getDirection: function() {
    return direction;
  }
};

module.exports = Defaults;
