/**
 * Title : Basic Node app example
 * Decription: Simple node application that print quotes per second interval.
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// Math object - Module scaffolding
const math = {};

// Get a random interger between two integers
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
http: math.getRandomNumber = function getRandomNumber(min, max) {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === "number" ? minimum : 0;
  maximum = typeof maximum === "number" ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

// Export the module
module.exports = math;
