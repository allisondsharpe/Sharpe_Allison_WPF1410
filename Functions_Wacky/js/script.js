/*
Allison Sharpe
10-23-14
Functions_Wacky
 */

alert("We are calculating the total amount of fruit!");
console.log(alert);

var findingAmount = prompt("Alice has 2 bananas, Sharon has 3 apples, Chris has 6 oranges, and Caleb has 9 berries. How much fruit do they have in total?");
while(findingAmount===""){
    findingAmount = prompt("Alice has 2 bananas, Sharon has 3 apples, Chris has 6 oranges, and Caleb has 9 berries. How much fruit do they have in total? Please don't leave blank.");
    console.log(findingAmount);
}

var fruit = [2,3,6,9];
var total = fruit[0] + fruit[1] + fruit[2] + fruit[3];
console.log(total);

var alice = 2;
var sharon = 3;
var chris = 6;
var caleb = 9;
var totalAmount = 2 + 3 + 6 + 9;

if(totalAmount > 15 || totalAmount < 30){
    console.log("Make fruit smoothies!");
}else{
    console.log("Gather more fruits!");
}

var amount = totalFruit(2,3,6,9);

function totalFruit(alice, sharon, chris, caleb){
    var amount = alice + sharon + chris + caleb;
    return amount;

}
console.log(" The total amount of fruit is " + amount);