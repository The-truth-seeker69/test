const button = document.querySelector("[data-btn-generate-quotes ]");
const displayer = document.querySelector("[data-quotes-displayer]");
const quotes = [
  "Any fool can write code that a computer can understand.",
  "Good programmers write code that humans can understand.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  " In order to be irreplaceable, one must always be different",
  "Knowledge is power.",
  "Your limitation—its only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
];
button.addEventListener("click", () => {
  const randomQuotes = Math.floor(Math.random() * quotes.length);
  displayer.innerHTML = quotes[randomQuotes];
});
