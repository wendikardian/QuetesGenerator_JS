
var quotes = ["THis is my life not yours",
 "I Love U",
  "This is not the end of the world" , 
    "No tears left to cry",
"this is quotes", "Makan ga makan yang penting hidup", " What a waste of times"];
function generate(){
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteSection').innerHTML = quotes[random];
}


function seeAllQuotes(){
    text = "<ul>";
    for(i=0; i<quotes.length; i++){
        text += "<li>" + quotes[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("quoteSection").innerHTML = text;
}


function newQuotes(){
    var newQuote = document.getElementById("insertSection").value;
    alert("New Quote Has been added!");
    quotes.push(newQuote);
    seeAllQuotes();
}