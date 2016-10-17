var apiKey = require('./../.env').apiKey;

function Search(){

}

Search.prototype.getlist = function(results) {
  var userName = [];
  $.get('https://api.github.com/search/users' + "?q=" + results).then(function(response){
    for (var i = 0; i < response.items.length; i++) {
       userName.push(response.items[i].login);
  }
      $('#results').text("Here are your usernames " + results);
      userName.forEach(function(userName){
      $('#results').append("<li>" + userName + "</li>");
     });
   });
};

Search.prototype.getRep = function(results2) {
  var input = [];
  $.get('https://api.github.com/users/' + results2 + '/repos?access_token=' + apiKey).then(function(response){
  for (var i = 0; i < response.length; i++) {
   input.push(response[i].full_name);
   input.push(response[i].description);
   console.log(response);

  }
     $('#results2').text("Here are your results " + results2);
     input.forEach(function(input){
     $('#results2').append("<li>" + input + "</li>");
   });
 });
};
exports.searchModule = Search;
