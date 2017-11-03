const assert = require('assert');
const lodash = require('lodash');
const Defaults = require('../defaults/defaults');
const Game = require('../table/game');
const Move = require('../table/move');

let userInput;
let positions = [];
let directions = [];
let robot = {
  positionX: null,
  positionY: null,
  direction: null,
  previousDirection: null,
  compute: null
};

describe('Game should start with:', function(){
  describe('Command Line', function(){
    let firstCommand = 'PLACE';
    userInput = 'PLACE';
    result = lodash.includes(firstCommand, userInput);
    it('- PLACE', function(done){
        assert.equal(result, true);
        done();
    });
  });
  describe('followed by position x and y', function(){
    positions = Defaults.getPosition();
    userInput = 3;
    result = lodash.includes(positions, userInput);
    it(`- should accept values ${positions}`, function(done){
      assert.equal(result, true);
      done();
    })
  });
  describe('and by a direction', function(){
    directions = Defaults.getDirection();
    userInput = 'SOUTH';
    result = lodash.includes(directions, userInput);
    it(`- should accept ${directions}`, function(done){
      assert.equal(result, true);
      done();
    })
  });  
});

describe('Show warning:', function(){
  describe('when robot goes out of the boundaries', function(){
    let result;
    robot.positionX = 4;
    robot.positionY = 4;
    robot.direction = 'NORTH';
    robot.previousDirection = 'NORTH';
    robot.compute = 1;    
    result = Game.predictMovement(robot);
    if (result) {
      Defaults.getWarning();
    }
    console.log('result', result);
    it(`- should show:
      ${Defaults.getWarning()}`, function(done){
        assert.equal(result, false);
        done();
    });
  });
});
