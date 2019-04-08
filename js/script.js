//array of quotes----------------
let quotes = [
  {
    quote: "Bringing the gifts that my ancestors gave, I am the dream and the hope of the slave. I rise. I rise. I rise.",
    source: "Maya Angelou",
    citation: "Still I Rise",
    year: 1978
  },
  {
    quote: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.",
    source: "Booker T. Washington"
  },
  {
    quote: "We must develop and maintain the capacity to forgive. He who is devoid of the power to forgive is devoid of the power to love. There is some good in the worst of us and some evil in the best of us. When we discover this, we are less prone to hate our enemies.",
    source: "Dr. Martin Luther King Jr."
  },
  {
    quote: "Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
    source: "Barack Obama",
    year: 2008
  },
  {
    quote: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals. And so when I hear about negative and false attacks, I really don’t invest any energy in them, because I know who I am.",
    source: "Michelle Obama"
  },
  {
    quote: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    source: "Audre Lorde"
  },
  {
    quote: "Never be limited by other people’s limited imaginations.",
    source: "Dr. Mae Jemison"
  },
  {
    quote: "If there is no struggle, there is no progress.",
    source: "Frederick Douglass"
  },
  {
    quote: "You’re not to be so blind with patriotism that you can’t face reality. Wrong is wrong, no matter who does it or says it.",
    source: "Malcolm X"
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
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

