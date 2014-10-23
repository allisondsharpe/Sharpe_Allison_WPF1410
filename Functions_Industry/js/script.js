/*
Allison Sharpe
10-22-14
Functions_Industry
 */

alert("We are measuring the width x height of a screen resolution!");
console.log(alert);

var calcArea = prompt("If the width of a screen resolution is 1440ft and the height is 900ft, what is the area?");
while(calcArea==="") {
    calcArea = prompt("If the width of a screen resolution is 1440ft and the height is 900ft, what is the area? Please don't leave blank.");
    console.log(calcArea);
}

var total = resolution(1440, 900);

    function resolution(width, height){
        var area = width * height;
        return area;

    }
console.log(total);

var area = 1296000;

if(area >= 1200000){
    console.log("Complete measurements");

}else{
    console.log("Undo measurements ")

}
