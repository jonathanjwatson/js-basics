console.log("Hello world");

// var randomQuotes = [
//   "The more you do, the more you can do.", // 0
//   "Do or do not, there is no try.", // 1
//   "Fortune favors the bold.", // 2
//   "No fate but what we make.", // 3
//   "Bloom where you're planted.", // 4
//   "Help will always be given at Hogwarts to those who ask for it.", // 5
// ];

// var quoteObject = {
//     speaker: "Yoda",
//     text: "Do or do not, there is no try."
// }

var randomQuotes = [
  {
    speaker: "Yoda",
    text: "Do or do not, there is no try.",
  },
  {
    speaker: "Lucille Ball",
    text: "The more you do, the more you can do.",
  },
  {
    speaker: "Latin Proverb",
    text: "Fortune favors the bold.",
  },
  {
    speaker: "Albus Dumbledore",
    text: "Help will always be given at Hogwarts to those who ask for it.",
  },
];

function showRandomQuote() {
  var randomIndex = Math.floor(Math.random() * randomQuotes.length);
  alert(randomQuotes[randomIndex].text + " - " + randomQuotes[randomIndex].speaker);
  askForAnotherQuote();
}

function askForAnotherQuote() {
  var anotherQuote = confirm("Would you like to see another quote?");
  if (anotherQuote) {
    showRandomQuote();
  }
}

// for(var i = 0; i < randomQuotes.length; i++){

// }

// console.log(randomQuotes);
// console.log(randomIndex);
// console.log(randomQuotes[randomIndex]);
showRandomQuote();
