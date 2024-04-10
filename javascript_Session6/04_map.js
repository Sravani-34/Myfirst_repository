/*
map()
-used to get access of each and every element of the array
-will return some value
-creates a new array from calling a function for every array element.
-does not change the original array.


**Syntax**

    var new Array = < arrayName > .map(function(currentValue, index, arr), thisValue){
        return <value>
    })


--currentValue > Required > The value of the current element.
--index >	     Optional > The index of the current element.
--arr >	         Optional > The array of the current element.
--thisValue >	 Optional > Default value undefined > A value passed to the function to be used as its *this* value.

*/
//Example

var myarray=[100,200,300,400,500,600]
var myarray1=myarray.map(function(element,index,array){
    return element-100;
            

});
console.log(myarray1);

