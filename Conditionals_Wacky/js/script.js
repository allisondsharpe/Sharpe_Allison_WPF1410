/*
Allison Sharpe
10-16-14
Conditionals_Wacky
 */

//If Daryl has 5 marbles, Rick has 7 marbles, and Andrea has 3 marbles. How many marbles do they all have in total?

var Daryl = 5;
var Rick = 7;
var Andrea = 3;
var totalAmount = (5 + 7 + 3);//The total amount will be all three variables added together
console.log(totalAmount);

var marbles = prompt("Daryl has 5 marbles, Rick has 7 marbles, and Andrea has 3 marbles. How many do they have in total?");
console.log(marbles);//This will prompt the user to add all variables to find the total amount of marbles

if(marbles === "");//This is a validation prompt that will enable the user to enter in total amount for the second time
marbles = prompt("Daryl has 5 marbles, Rick has 7 marbles, and Andrea has 3 marbles. How many do they have in total? Please don't leave blank.");

if(totalAmount < 10){
    console.log("Buy or find more marbles.");
}else{
   console.log("Play a game consisting of marbles.");
}//This is the "if and else" operator that will enable the console to directing the user as to what they should do next

alert("There are 15 marbles in total.");
console.log(alert);//This will alert the user that there are 15 marbles in total