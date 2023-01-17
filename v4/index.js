/**
 * Title : Basic Node app example
 * Decription: Simple node application that print quotes per second interval.
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// Dependencies
const mathLibrary = require("./lib/math");
const quotesLibrary = require("./lib/quotes");

// App object - module scaffolding
const app = {};

// Configuration
app.config = {
  timeBetweenQuotes: 1000,
};

// Function that print a random quote
app.printAQuote = function printAQuote() {
  // Get all the quotes
  const allQuotes = quotesLibrary.allQuotes();

  // Get the length of the quotes
  const numberOfQuotes = allQuotes.length;

  // Pick a random number between 1 and numberOfQuotes
  const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

  // Get the quote at that position in the array (minus one)
  const selectedQuote = allQuotes[randomNumber - 1];

  // Send the quote to the console
  console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
  // Create the interval, using the config variable defined above
  setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// invoke the loop
app.indefiniteLoop();
