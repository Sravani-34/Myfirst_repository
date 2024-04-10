/*
lastIndexOf()

Used to check weather the element is present or not in the array
starts at a specified index and searches from right to left

returns>>  
-position of the element
-the last index at which a given element can be found
-or -1 if the value is not found
*/

//Example

/*var myvalues=[20,50,60,70,84,96,25,47];
var myvalues1=myvalues.lastIndexOf(47);
console.log(myvalues1);*/

var Mydata = [20, 70, 40, 50, 60, 70, 20];
var myElement = Mydata.lastIndexOf(70);
console.log(myElement);