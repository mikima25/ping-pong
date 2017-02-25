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
