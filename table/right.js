'use strict';

const lodash = require('lodash');
const Defaults = require('../defaults/defaults');
const Right = {
  command: function (vorpal, options) {
    vorpal
      .command('r ')
      .description('Outputs "bla bla bla " ')
      .action(right);
  }
}

function right(args, callback) {

  // this.log(Defaults.getRobot());
  // this.log(Defaults.getValid());
  callback();
}

module.exports = Right;
