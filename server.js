'use strict';

const vorpal = require('vorpal')();
const place = require('./place/place');

console.log('place: ',place);
// let iRobot = {
//   requiredPosition: {
//     isValid: null,
//     positionX: null,
//     positionY: null
//   },
//   requiredDirection: {
//     isValid: null,
//     face: null
//   }
// };
vorpal
  .use(place);
// vorpal
//   .command('q <requiredX>, <requiredY>, <requiredF>')
//   .description('Outputs "Type PLACE and Inform Position X, Y and FACE".')
//   .action(function (args, callback) {
//     let requiredPosition = {};
//     let requiredFace = '';
//     requiredPosition = chechInputIsValid(args.requiredX, args.requiredY);    
//     requiredFace = checkFaceIsValid(args.requiredF);

//     this.log(requiredPosition, requiredFace);
//     callback();
//   });


vorpal
  .delimiter('Toy Robot Simulator $')
  .show();

// function chechInputIsValid(valueX, valueY) {
//   console.log('x', x);

//   let positionX = lodash.includes(x, valueX);
//   console.log('positionX', positionX);
//   let positionY = lodash.includes(y, valueY);
//   console.log('positionY', positionY);
//   return [positionX, positionY];
// }
// function checkFaceIsValid(face) {
//   return face;
// }