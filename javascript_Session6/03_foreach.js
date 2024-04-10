/* an iterative method.
-calls a function for each element in an array. 
-is not executed for empty elements.
-passes a callback function for each element of an array

Note that the function takes 3 arguments:

-The item value
-The item index
-The array itself

***Syntax**
        <arrayName>.forEach (function(element,index, array) {
            
        })


--Element/ Current Value (required) - The value of the current array element
--Index (optional) - The current element's index number
--Array (optional) - The array object to which the current element belongs
*/

//Example

/*var myarray=[20,30,50,60,40,80,70,100];
myarray.forEach (function(element,index,array){
        console.log(element,index ,array)

});*/
var myarray1=[40,50,60,70,80,90]
myarray1.forEach(function(element,index,array){
        console.log(element,index ,array)
});

    
