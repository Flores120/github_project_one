var apiKey = require('./../.env').apiKey;
var Search = require('./../js/github.js').searchModule;
var list = new Search();

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var results = $('#searchInput').val();
    list.getlist(results);
});
  $('#search2').submit(function(event){
    event.preventDefault();
    var results2 = $('#searchInput2').val();
    list.getRep(results2);
  });
});




//  $('.results').text("Here are your results " + results);

//    input.forEach(function(input){
//    $('.results').append("<ul>" + input + "</ul>" );
//  });

// $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
//   var input = [];
//   for (var i = 0; i < response.items.length; i++) {
//    input.push(response.items[i].login);
//  }
