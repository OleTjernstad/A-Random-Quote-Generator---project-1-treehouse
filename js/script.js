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
/**
 * Function for getting random quote from quotes array
 *  
 * @returns {quote object}
 */
const getRandomQuote = () => {
  const quotesKey = getRandomNumber(quotes.length);
  return quotes[quotesKey];
}

/**
 * Get random number between 0 and max
 * 
 * @param {number} max highest number to return
 * 
 * @returns {number} returns number between 0 and max
 */
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}



/**
 * Print the quote to the quote-box
 */
const printQuote = () => {
  const quoteBox = document.getElementById("quote-box");

  const quote = getRandomQuote();

  quoteBox.innerHTML = `<p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}
    ${occupationHtml(quote.occupation)}
    ${citationHtml(quote.citation)}
    ${yearHtml(quote.year)}
  </p>
  ${ytLinkHtml(quote.YTLink)}`;
}

/**
 * Add occupation if is present in object
 * @param {string} occupation From quotes object
 * 
 * @returns {html}
 */
const occupationHtml = (occupation) => {
    if (occupation !== undefined) {
        return `<span class="occupation"> | ${occupation} </span>`;
    } else {
        return "";
    }
};

/**
 * Add citation if is present in object
 * @param {string} citation From quotes object
 * 
 * @returns {html}
 */
const citationHtml = (citation) => {
    if (citation !== undefined) {
        return `<span class="citation">${citation} </span>`;
    } else {
        return '';
    }
}

/**
 * Add year if is present in object
 * @param {string} year From quotes object
 * 
 * @returns {html}
 */
const yearHtml = (year) => {
    if (year !== undefined) {
        return `<span class="year">${year} </span>`;
    } else {
        return '';
    }
}

/**
 * Add YTLink if is present in object
 * @param {string} ytLink From quotes object
 * 
 * @returns {html}
 */
const ytLinkHtml = (ytLink) => {
  if (ytLink !== undefined) {
    return `<p class="yt-link"><a href="${ytLink}" target="_blank">▶️ Hear the quote read on youtube</a></p>`;
  } else {
    return "";
  }
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
printQuote(); // start the page with a random quote