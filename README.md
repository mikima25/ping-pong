# ping-pong
This project is about using the concepts of Javascript to create a game that allows the user to note behaviour changes in the
output of the number entered. My Ping-Pong thus Ping-pong will count up to a number entered by the user from 1. However the program
has exceptions regarding the counting process. Numbers that are divisible by 3 are replaced by "Ping" those divisible by 5 are replaced by "Pong" while the numbers divisible
by 15 replaced by "Ping-Pong". The project was developed based on javascript behavior driven development (BDD). The specifications
used in the project are as described below

#Specifications
The program behaviour is divided into three parts:
First when the user input a number the game will continuously
count up to the inputted number from one will replacing all the numbers divisible by 3 with "ping". For instance, if 8 is entered; the count is listed as:

"Ping"
Example Input: 3
Expected output: [1, 2, ping]

"Pong"
All numbers that are divisible by 5 replaced with "pong"
Example Input: 10
Expected output: [1, 2, ping, 4, pong, ping,7, 8, ping, pong]

"Ping-Pong"
All numbers that are divisible by 5 replaced with "ping-pong"
Example Input: 20
Expected output: [1, 2, ping, 4, pong, ping,7, 8, ping, pong, 11, ping, 13, 14, ping-pong, 16, 17, ping, 19, pong]

#Technology used
The game has been developed based on the concepts of Javascript and Jquery library to create the back-end and user Interface. HTML and CSS are used to display the webpage into users' browsers.

#Author
The program has been developed and is maintained by Vitalis Mikima Omulo.
