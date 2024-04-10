/*Global Scope and Functions
Scope refers to the visibility of variables
Variables defined outside the function has global scope
Global scope means it can be seen everywhere in your JS code
*/



     // defining global variable

     var x=500;
//define function 1
function f1(){
    y=200;
}


    //Assign 5 to oopsGlobal Here
    



//Define second function

function f2(){
    var f3;
    if( x!=0)
    {
        f3="My Global value:"+ x + " ; ";
    }
    if( y!=0)
    {
        f3+="My local value:"+y;
        console.log(f3);
    }
}
f1();
f2();
