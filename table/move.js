'use strict';

const lodash = require('lodash');
const Game = require('../table/game');
const Defaults = require('../defaults/defaults');

const Move = {
  command: function (vorpal, options) {
    vorpal
      .command('m ')
      .description('Outputs "Type MOVE to change robot\'s position" ')
      .action(move);
  }
}
let robotPosition = {};

function move(args, callback) {
  if(Game.getGame() && Game.getValid()) {
    robotPosition = Game.getRobot();
    console.log('Game robotPosition: ', robotPosition);

    if (robotPosition.previousDirection == "NORTH" || robotPosition.previousDirection == "SOUTH") {
      if (robotPosition.direction == "NORTH" || robotPosition.direction == "SOUTH") {
        Game.setMoveX(robotPosition);
        robotPosition = Game.getMoveX();        
      } else if (robotPosition.direction == "WEST" || robotPosition.direction == "EAST") {
        Game.setMoveY(robotPosition);
        robotPosition = Game.getMoveY();
      }    
    } else if (robotPosition.previousDirection == "WEST" || robotPosition.previousDirection == "EAST") {
      if (robotPosition.direction == "NORTH" || robotPosition.direction == "SOUTH") {
        Game.setMoveY(robotPosition);
        robotPosition = Game.getMoveY();        
      } else if (robotPosition.direction == "WEST" || robotPosition.direction == "EAST") {
        Game.setMoveX(robotPosition);
        robotPosition = Game.getMoveX();
      }
    }


    console.log('MOVE robotPosition', robotPosition);
  }
  
  // this.log(Defaults.getRobot());
  // this.log(Defaults.getValid());
  callback();
}

module.exports = Move;
