//accessing nested object
var myStorage= {
    "car":{
        "inside":{
            "glove box":"maps",
            "seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
}
var gloveboxContents= myStorage.outside["trunk"];
console.log(gloveboxContents)