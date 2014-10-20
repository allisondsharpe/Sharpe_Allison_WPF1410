/*
Allison Sharpe
10-20-14
Functions_Worksheet
 */

var total = calculateArea(5, 6);

function calculateArea(width, height){
var area = width * height;//This is the calculated area for the rectangle
//console.log(" The Area of a Rectangle is " + area);//This will tell the console to
    return area;
}
//console.log(total);

findingCircumference(5, 5, 3.14);

function findingCircumference(radius, radius2, pie){
    var circumference = radius * radius2 * pie;
    console.log(" The circumference of the circle is " + circumference);
}
console.log(findingCircumference);





