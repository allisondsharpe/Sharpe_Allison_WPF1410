/*
Allison Sharpe
10-15-14
Conditionals_Personal
 */

//I am thinking of a solution that calculates the measurements of my bedroom


var width = 14;//The width of my bedroom is 14 ft.
var height = 17;//The height of my bedroom is 17 ft.
var area = width * height;//The area will be width times height
console.log(area);

var calculatedArea = prompt("What is the area of my bedroom if the width is 14 sq.ft. and the height is 17sq.ft.?");
console.log(calculatedArea);//I am prompting the user to calculate the area for my entire bedroom

if(calculatedArea === "");
calculatedArea = prompt("Please enter the area for 14sq.ft. and 17sq.ft.");//This is a validation of my first prompt

if(area >= 200){//This is my "if" statement that will determine whether the statement is true or false
    console.log("Complete calculation!");//If true, "Complete calculation" will appear in the console

}else{//This is my "else" statement that will be the second option if the statement is false
    console.log("Redo calculation!");//If false, "Redo calculation" will appear in the console
}
area = true;//A validation that the statement is in fact true

alert("The area is equal to 238 sq.ft.");//This is my alert prompt letting the user know that the area is 238 sq.ft.