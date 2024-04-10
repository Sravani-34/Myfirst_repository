//for loop with in operator

//it is used to iterate object
//It will give the access of property key
/*  

<<Syntax>>

    for (var <variable name>  in  <object-name>){

    }
*/

var info = {
    id: 101,
    name: "Humira Alam",
    city: "Gothenburg",
    gender: "female",
  };

 
  
  for (var data in info) {
    console.log(data, ":", info[data]);
  }

  var mydata={
    name:"Sravani",
    id:121,
    city:"Stockholm",
    gender:"Female",
  };

  for(var data in mydata){
    console.log(data, ":",mydata[data])
  }