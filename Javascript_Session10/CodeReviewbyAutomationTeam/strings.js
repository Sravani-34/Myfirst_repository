//Accessing all the letters of the string
var string  = "Pooja_Gangavathi";
for(i=0;i<string.length;i++){
           console.log(string[i]);
}
console.log("")

//Accessing the first letter of the string using index number
     console.log(string[0]);
   console.log("");

//Accessing the last letter of the string without using index number
console.log(string[string.length-1])

//To count how many letters are there in given string
var count=0;
     for(i=0;i<string.length;i++){
    count++;
}
console.log("Number of letters in a given string : " + count)

// Allignment issue