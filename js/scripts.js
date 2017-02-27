//back-end
function myPingPong(userInput) {
var entry = [];
for (var i = 1; i <= userInput; i++) {
 if ((i % 15) === 0) {
   entry.push ("Ping-Pong");
 } else if ((i % 5) === 0) {
   entry.push ("Pong");
 } else if ((i % 3) === 0) {
   entry.push ("Ping");
 } else
   entry.push (i);
}
return entry;
}
//User Interface Logic
$(document).ready(function(){
    $("#userInput").submit(function(event){
        $("#output").empty();
        var userInput = parseInt($("input#userInput").val());
        var output = countUp(userInput);
        output.forEach(function(item){
        $("#output").append('<li>' + item + '</li>');
        });
        event.preventDefault();
    });
});
