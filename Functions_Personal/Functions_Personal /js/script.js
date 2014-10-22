/*
Allison Sharpe
10-21-14
Functions_Personal
 */

alert("We are finding the area of my kitchen!");
console.log(alert);

var areaPrompt = prompt("What is the area of my kitchen if the width is 180ft. and the height is 170ft.?");
while(areaPrompt===""){
    areaPrompt = prompt("Please enter the area for my kitchen if the width is 180ft. and the height is 170ft.?");
    console.log(prompt);
}

var totalArea = function(width, height){
    var area = width * height;
    console.log(" The area of my kitchen is " + area + " ft.");
    return area;
}

var a = totalArea(180, 170);
console.log(a);

