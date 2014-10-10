/*
Allison Sharpe
10-9-14
Expressions_Industry
 */

//I am calculating the total amount of pixels needed to fit a screen resolution

var width = 10.0;//This is the total width of the screen resolution
var height = 13.3;//This is the total height of the screen resolution
var dotsPerInch= 96;//This is the total image dpi(dots per inch) of the screen resolution
var pixelsSquared = width * height/96;//This is the total calculation for the screen resolution
console.log(pixelsSquared);

var pixelsSquared = [10.0 , 13.3 , 96];//This is the array for the screen resolution

pixelsSquared [0];
pixelsSquared [1];//This is telling Java to activate the array by placing each amount's index number in brackets
pixelsSquared [2];
console.log(pixelsSquared);

var userInput = prompt("What is 10.0 pixels squared x 13.3 pixels squared?");//This will allow the user to find the product of 10.0 and 13.3
console.log(userInput);

var divide = prompt("What is 133 pixels squared divided by 96?");//This will allow the user to find the quotient of 133 and 96
console.log(divide);

alert("There are 1.39 square pixels in total" );//This is giving the user the correct calculation
console.log(alert);