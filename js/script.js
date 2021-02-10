/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  const quotesKey = _getRandomNumber(quotes.length);
  return quotes[quotesKey];
}
/**
 * Get random number between 0 and max
 * 
 * @param {number} max highest number to return
 * 
 * @returns {number} returns number between 0 and max
 */
const _getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}

/***
 * `printQuote` function
***/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);