/*Global Scope and Functions
Scope refers to the visibility of variables
Variables defined outside the function has global scope
Global scope means it can be seen everywhere in your JS code
*/


// defining global variable
var myGlobal = 10

//define function 1

function fun1(){

    //Assign 5 to oopsGlobal Here
    ooopsGlobal = 5;

}

//Define second function

function fun2 (){
    var output ="";

    if (typeof myGlobal != "undefined")
       { output= "myGlobal: " + myGlobal + "  ; ";

    }
    if (typeof ooopsGlobal != "undefined"){
       
        output= output+"oopsGlobal: " + ooopsGlobal
        
        - console.log(output);

    }


}

fun1();
fun2();