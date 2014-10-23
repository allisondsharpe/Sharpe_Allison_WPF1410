/*
Allison Sharpe
10-22-14
Functions_Industry
 */

//I am measuring the width x height in order to calculate the area of a laptop's screen resolution

alert("We are measuring the width x height of a screen resolution!");//Alerts the user about the task at hand
console.log(alert);

var calcArea = prompt("If the width of a screen resolution is 1440ft and the height is 900ft, what is the area?");//Prompt user to finding the area
while(calcArea==="") {//Enables the prompt to repeat itself until user enters in their answer for the prompt
    calcArea = prompt("If the width of a screen resolution is 1440ft and the height is 900ft, what is the area? Please don't leave blank.");
    console.log(calcArea);
}

var total = resolution(1440, 900);//The function call for width x height

    function resolution(width, height){//The function parameters for the function call
        var area = width * height;//The calculations to finding the area
        return area;//Returns values back to function

    }
console.log(total);//Enables the console to print out area for width x height

var area = 1296000;//The total area for width x height

if(area >= 1200000){//If and else operators
    console.log("Complete measurements");//Enables the console to print out statement if true

}else{
    console.log("Undo measurements")//Enables the console to print out statement if false

}