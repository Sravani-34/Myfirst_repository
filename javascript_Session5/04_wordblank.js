//combining missing words with return  function

function wordBlanks (myNown, myAdjective, myVerb, myAdverb){

    var result = "";
    result= "My"+ myAdjective + myNown + myVerb + myAdverb;
    return result;
}
console.log(wordBlanks(" dog", " big", " runs", " fast"));

//another example
function myname(x,y,z,p)
{
    var myname1="my "+p+y+z+x;
    return myname1;
}
console.log(myname("india"," place "," is ","native"));