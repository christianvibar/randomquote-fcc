$(document).ready(function() {
  getQuote (); //run randomQuote at load
  
  var currentQuote; //declare quoteText as global variable
  var currentAuthor; //declare quoteAuthor as global variable
  
 function getQuote () {
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?" //call random quote API using jsonp
   
 $.getJSON(url, function(data) {
   currentQuote = data.quoteText; 
   currentAuthor = data.quoteAuthor;
   $("#quote").html('"'+currentQuote+'"'); //append data.quoteText to #quote
   $("#author").html("- "+currentAuthor); //append data.quoteAuthor to #author
    });
};
  
 $("#tweet-quote").click(function () {
  window.open('https://twitter.com/intent/tweet?text='+ currentQuote + " - " + currentAuthor); //intent link with quoteText + quoteAuthor     
   }); // opens new window when tweet button is pressed
  
 $("#new-quote").click(function() {
      getQuote();
    }); // gets random quote upon pressing #new-quote
  
});