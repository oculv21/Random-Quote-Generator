//array of quotes----------------
let quotes = [
  {
    quote: "Bringing the gifts that my ancestors gave, I am the dream and the hope of the slave. I rise. I rise. I rise.",
    source: "Maya Angelou",
    citation: "Still I Rise",
    year: 1978,
    color: "#BF3FBF"
  },
  {
    quote: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.",
    source: "Booker T. Washington",
    color: "#BF3F3F"
  },
  {
    quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    source: "Dr. Martin Luther King Jr.",
    color: "#7FBF3F"
  },
  {
    quote: "Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
    source: "Barack Obama",
    year: 2008,
    color: "#3F7FBF"
  },
  {
    quote: "When they go low, we go high.",
    source: "Michelle Obama",
    color: "#BF3F7F"
  },
  {
    quote: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    source: "Audre Lorde",
    color: "#BFBF3F"
  },
  {
    quote: "Never be limited by other people’s limited imaginations.",
    source: "Dr. Mae Jemison",
    color: "#3FBFBF"
  },
  {
    quote: "If there is no struggle, there is no progress.",
    source: "Frederick Douglass",
    color: "#BF7F3F"
  },
  {
    quote: "You’re not to be so blind with patriotism that you can’t face reality. Wrong is wrong, no matter who does it or says it.",
    source: "Malcolm X",
    color: "#3F3FBF"
  }
]

//generate random quote
function getRandomQuote() {
  let r = Math.floor(Math.random() * quotes.length);
  return quotes[r];
}

//print random quote 
function printQuote() {
  let newQuote = getRandomQuote();
  let quoteBox = '';
  quoteBox += '<p class="quote">' + newQuote.quote + '</p>';
  quoteBox += '<p class="source">' + newQuote.source;
  if (newQuote.citation) {
    quoteBox += '<span class="citation">' + newQuote.citation + '</span>';
  } 
  if (newQuote.year) {
    quoteBox += '<span class="year">' + newQuote.year + '</span>';
  }
  quoteBox += '</p>';
  document.getElementById("quote-box").innerHTML = quoteBox;
  document.body.style.backgroundColor = newQuote.color;
}
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
let intervalID = window.setInterval(printQuote, 8000);

