/*
Allison Sharpe
10-16-14
Conditionals_Wacky
 */

//If Daryl has 5 marbles, Rick has 7 marbles, and Andrea has 3 marbles. How many marbles do they all have in total?

var Daryl = 5;
var Rick = 7;
var Andrea = 3;
var totalAmount = (5 + 7 + 3);
console.log(totalAmount);

var marbles = prompt("Daryl has 5 marbles, Rick has 7 marbles, and Andrea has 3 marbles. How many do they have in total?");
console.log(marbles);

if(totalAmount < 10){
    console.log("Buy or find more marbles.");
}else{
   console.log("Play a game consisting of marbles.");
}


