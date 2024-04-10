var myobj={
    name:"Sravani",
    "Full name":"Sravani Ramineni",
    id:152,
    Street:["Stockholm",["Sollentunna"]]
}
myobj["phno"]="52554111";
myobj.language="english;";
myobj.age=25;
delete myobj.age;
delete myobj["phno"]
console.log(myobj);
