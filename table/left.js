'use strict';

const lodash = require('lodash');
const Defaults = require('../defaults/defaults');
const Left = {
  command: function (vorpal, options) {
    vorpal
      .command('l ')
      .description('Outputs "bla bla bla " ')
      .action(left);
  }
}

function left(args, callback) {

  // this.log(Defaults.getRobot());
  // this.log(Defaults.getValid());
  callback();
}

module.exports = Left;
