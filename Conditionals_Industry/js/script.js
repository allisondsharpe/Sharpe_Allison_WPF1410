/*
Allison Sharpe
10-15-14
Conditionals_Industry
 */

//I am measuring the width and height for coding a website to adjust to a mobile user's screen resolution

var width = 640;//Calculating the width of the user's mobile device's screen resolution
var height = 960;//Calculating the height of the user's mobile device's screen resolution
var area = width * height;//Multiplying width and height in order to find the area
console.log(area);//This will tell the console to generate the area for the width and height

var findingArea = prompt("If the width of a mobile device is 640 in. and the height is 960 in., what is the area?");
console.log(findingArea);//Prompting the user to calculate the area for the width times the  height

if(area === "");{
    area = prompt ("Please calculate the area if the width is 640 in. and the height is 960 in.");
}//This is validating the prompt for the user to calculate the total area for width x height

var area = 614400;
var decision;//This is the ternary operation that will allow the console to calculate which decision I should make next

decision = (area <= 615000) ? "Complete coding for mobile device." : "Re-calculate measurements.";
console.log(decision);

alert("The total area for the screen resolution is 614400 inches.");
console.log(alert);//This is an alert letting the user know what the total area is for the width x height