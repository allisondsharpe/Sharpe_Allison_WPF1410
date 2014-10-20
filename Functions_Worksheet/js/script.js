/*
Allison Sharpe
10-20-14
Functions_Worksheet
 */

//Example One

var total = calculateArea(5, 6);//This is the function call for finding the area

function calculateArea(width, height){//This function labels the numbers in the function call
    var area = width * height;//These are the calculations for finding the area of the rectangle 
    console.log(" The Area of a Rectangle is " + area);//This will tell the console to print out the calculated area
    return area;//This will return the values from the function
}
console.log(total);//This will enable the console to show the returned values


//Example Two

findingCircumference(5, 5, 3.14);//This is the function call for finding circumference

function findingCircumference(radius, radius2, pie){//This functions labels the numbers in the function call
    var circumference = radius * radius2 * pie;//These are the calculations required to find circumference: radius x itself x pie(3.14)
    console.log(" The circumference of the circle is " + circumference);//This will tell the console to print out the circumference
    return circumference;//This will return the values from the function
}
console.log(findingCircumference);//This will enable the console to show the returned values


//Example Three

beeStings(8.666666667, 15);//This is the function call for finding the amount of bee stings

function beeStings(bee, catWeight){//This function labels the numbers in the function call
    var amountBeeStings = bee * catWeight;//These are the calculations for finding the total amount of bee stings
    console.log(" It takes " + amountBeeStings + " bee stings to kill this animal");//This tells the console to print out amount of bee stings
    return amountBeeStings;//This will return the values from the function
}
console.log(beeStings);//This will enable the console to show the returned values