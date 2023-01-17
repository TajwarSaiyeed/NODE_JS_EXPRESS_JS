/**
 * Title : Basic Node app example
 * Decription: Simple node application that print quotes per second interval.
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// Dependencies
const fs = require("fs");

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes() {
  // Read the text file containing the quotes
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf-8");

  // Turn the string into an array
  const arrayOfQuotes = fileContents.split(/\r?\n/);

  // Return the array
  return arrayOfQuotes;
};

// Export the library
module.exports = quotes;
