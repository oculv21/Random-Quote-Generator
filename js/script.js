// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//array of quotes----------------
let quotes = [
  {
    quote: "Bringing the gifts that my ancestors gave, I am the dream and the hope of the slave. I rise. I rise. I rise.",
    source: "Maya Angelou",
    citation: "Still I Rise",
    year: 1978
  },
  {
    quote: "I hope that the day will come in America when this business of male versus females does not become such an overriding issue, so that the talents and abilities that the almighty God have given to <em>people</em> can be utilized for the benefit of humanity.",
    source: "Shirley Chisholm",
    citation: "The Black Woman in Contemporary America",
    year: 1974
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

console.log(quotes)


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.