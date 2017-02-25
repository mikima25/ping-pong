$(document).ready(function() {
  $("form#blank").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var userNumber = parseInt($("input#number").val());
    for (var count = 1; count <= userNumber; count++) { //Beginnning of for loop
      if (count % 3 === 0) { //first condition
        if (count % 5 === 0) { //second condition
          $("ul#output").append('<li> pingpong </li>');
        } else {
          $('ul#output').append('<li> ping </li>');
        }
      } else if (count % 5 === 0) {
        $('ul#output').append('<li> pong</li>');
      } else {
        $('ul#output').append('<li>' + count + '</li');
      }
    }
    $("#results").show();
  });
});
