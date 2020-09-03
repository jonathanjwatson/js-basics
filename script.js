/**
 * DOM VARIABLES
 */
var quoteEl = document.getElementById("quote");
var buttonEl = document.getElementById("new-quote-button");
var imageContainerEl = document.getElementById("image-container");

/**
 * JAVSCRIPT VARIABLES
 */
var randomQuotes = [
  {
    speaker: "Yoda",
    text: "Do or do not, there is no try.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-EjBXTS5uf3Y%2FT3E35pN1QVI%2FAAAAAAAAD5c%2FB-wdtLyoyLk%2Fs1600%2F2Yoda.jpg&f=1&nofb=1",
  },
  {
    speaker: "Lucille Ball",
    text: "The more you do, the more you can do.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.ultimatemovierankings.com%2Fwp-content%2Fuploads%2F2016%2F03%2Flucy-1111.jpg&f=1&nofb=1",
  },
  {
    speaker: "Latin Proverb",
    text: "Fortune favors the bold.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbarryaday.files.wordpress.com%2F2015%2F05%2Fgladiator_movie_russel_crowe_3_1024x1024_wallpapername-com.jpg&f=1&nofb=1",
  },
  {
    speaker: "Albus Dumbledore",
    text: "Help will always be given at Hogwarts to those who ask for it.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fharrypotter%2Fimages%2F4%2F40%2FAlbus_Dumbledore_%2528HBP_promo%2529_3.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F2000%3Fcb%3D20150822232849&f=1&nofb=1",
  },
];

/**
 * FUNCTION DEFINITIONS
 */
function selectAndDisplayQuote() {
  var randomIndex = Math.floor(Math.random() * randomQuotes.length);
  quoteEl.textContent =
    randomQuotes[randomIndex].text + " - " + randomQuotes[randomIndex].speaker;
    imageContainerEl.innerHTML = "";
  // 1. Create an element
  var imageEl = document.createElement("img");
  // 2. Add content
  imageEl.setAttribute("alt", randomQuotes[randomIndex].speaker);
  imageEl.setAttribute("src", randomQuotes[randomIndex].image);
  imageEl.setAttribute("style", "height: 200px")
  // 3. Append to existing element.
  imageContainerEl.appendChild(imageEl);
}

/**
 * FUNCTION CALLS
 */
selectAndDisplayQuote();

/**
 * EVENT LISTENERS
 */
buttonEl.addEventListener("click", function () {
  buttonEl.setAttribute("style", "margin-top: 20px;");
  selectAndDisplayQuote();
});
