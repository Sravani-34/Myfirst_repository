/*
filter()
--------
-Used in an array based on certain conditions
-creates a new array filled with elements that pass a test provided by a function.
-does not change the original array.

**Syntax**
    var newArray =  <arrayName>.filter (function (element, index){

        return true/false/ condition

    })

*/

//Example

/*var Mydata = [20, 30, 40, 50, 60, 70];

 var newData = Mydata.filter(function (element, index,array) {
  return index < 1;
 });
 console.log(newData);
var data = [20, 30, 99, 66, 78, 31, 91, 12, 11];

var filteredData = data.filter(function (element, index) {
  return element < 30;
});
console.log(filteredData);*/

var data=[10,20,30,40,50,60,70]
var data1=data.filter(function(element,index){
return element<50;
});
console.log(data1);