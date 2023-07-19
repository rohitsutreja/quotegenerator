var quote = document.querySelector(".quote");
var author = document.querySelector(".author");

var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  ]


lengthof = quotes.length



let btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()*lengthof);
    quote.innerText = quotes[random][0];
    author.innerText = quotes[random][1];
})