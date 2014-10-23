/*
Allison Sharpe
10-21-14
Functions_Personal
 */

//I am measuring the width x height in order to find the area for my kitchen

alert("We are finding the area of my kitchen!");//Alerts the user of the task at hand
console.log(alert);

var areaPrompt = prompt("What is the area of my kitchen if the width is 180ft. and the height is 170ft.?");//Prompts user to enter area for width x height
while(areaPrompt===""){//Places the user into a repetitive loop until they give an answer for the prompt
    areaPrompt = prompt("Please enter the area for my kitchen if the width is 180ft. and the height is 170ft.?");//Re-prompting the user
    console.log(prompt);
}

var totalArea = function(width, height){//Setting up the function for width x height
    var area = width * height;
    console.log(" The area of my kitchen is " + area + " ft.");//Enabling the console to print out the area
    return area;//Returning the area to the function
}

var a = totalArea(180, 170);//Anonymous function that is used as the function call
console.log(a);

var kitchenArea = 30600;//Ternary operator used for the example
var decision;

decision = (kitchenArea <= 40000) ? "Measure the area for the living room" : "Go back and re-measure";
console.log(decision);//Enables the console to print out a set of instructions for the next step

