/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

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
 * @param {number} max highest number to return
 * 
 * @returns {number} returns number between 0 and max
 */
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}

/**
 * Change to a random background color on body
 */
const setRandomBackgroundColor = () => {
    document.body.style.backgroundColor = `
    rgb(
        ${getRandomNumber(255)}, 
        ${getRandomNumber(255)}, 
        ${getRandomNumber(255)}
    )`;
}

/**
 * Print the quote to the quote-box
 */
const printQuote = () => {
    setRandomBackgroundColor(); // change background color when the quote changes
    const quoteBox = document.getElementById("quote-box");

    const quote = getRandomQuote();

    quoteBox.innerHTML = `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}
        ${optionalHtml(quote.occupation, "occupation")}
        ${optionalHtml(quote.citation, "citation")}
        ${optionalHtml(quote.year, "year")}
    </p>
    ${ytLinkHtml(quote.YTLink)}`;
}

/**
 * Add optional property if is present in object
 * @param {string} prop value from quotes object
 * @param {string} cssClass class for styling
 * 
 * @returns {html}
 */
const optionalHtml = (prop, cssClass) => {
    if (prop !== undefined) {
        return `<span class="${cssClass}"> ${prop} </span>`;
    } else {
        return "";
    }
};

/**
 * Add YTLink if is present in object
 * @param {string} ytLink From quotes object
 * 
 * @returns {html}
 */
const ytLinkHtml = (ytLink) => {
  if (ytLink !== undefined) {
    return `<p class="yt-link"><a href="${ytLink}" class="yr-link-href" target="_blank">▶️ Hear the quote read on youtube</a></p>`;
  } else {
    return "";
  }
};

printQuote(); // start the page with a random quote

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);