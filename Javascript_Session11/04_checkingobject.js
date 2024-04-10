//checking object if have property

var myObject = {
    Name: "Sravani",
    ID: 543,
    Locations:"Stockholm"


}
function checkobj(checkprop){

    if(myObject.hasOwnProperty(checkprop)){
        return myObject[checkprop];
    }
    
    else{
    return "Change Me!";}
}

console.log(checkobj("Name"))