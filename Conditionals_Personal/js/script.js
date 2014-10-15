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
console.log(calculatedArea);

if(calculatedArea === "");
calculatedArea = prompt("Please enter the area for 14sq.ft. and 17sq.ft.");

if(area >= 200){
    console.log("Complete calculation!");

}else{
    console.log("Redo calculation!");
}
area = true;

alert("The area is equal to 238 sq.ft.");
