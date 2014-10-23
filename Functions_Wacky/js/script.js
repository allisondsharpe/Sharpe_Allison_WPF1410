/*
Allison Sharpe
10-23-14
Functions_Wacky
 */

//I am calculating the amount of fruit gathered for four people

alert("We are calculating the total amount of fruit!");//Alerts the user of the task at hand
console.log(alert);

var findingAmount = prompt("Alice has 2 bananas, Sharon has 3 apples, Chris has 6 oranges, and Caleb has 9 berries. How much fruit do they have in total?");//Prompt the user to calculate total
while(findingAmount===""){//Enables the prompt to repeat itself until user answers prompt
    findingAmount = prompt("Alice has 2 bananas, Sharon has 3 apples, Chris has 6 oranges, and Caleb has 9 berries. How much fruit do they have in total? Please don't leave blank.");
    console.log(findingAmount);
}

var fruit = [2,3,6,9];//Array created for scenario
var total = fruit[0] + fruit[1] + fruit[2] + fruit[3];//Index numbers for the array
console.log(total);//Enables the console to calculate the amount of fruit

var alice = 2;
var sharon = 3;
var chris = 6;
var caleb = 9;
var totalAmount = 2 + 3 + 6 + 9;//Calculates the amount of fruit yet again, except in variable format

if(totalAmount > 15 || totalAmount < 30){//Or operator used where both statements are true
    console.log("Make fruit smoothies!");//Enables the console to print out statement if true
}else{
    console.log("Gather more fruits!");//Enables the console to print out statement if false
}

var amount = totalFruit(2,3,6,9);//This is the function call

function totalFruit(alice, sharon, chris, caleb){//These are all four parameters
    var amount = alice + sharon + chris + caleb;//Calculations for the parameters
    return amount;//Returns the values to the function

}
console.log(" The total amount of fruit is " + amount);//Enables the console to print out the total amount of fruit