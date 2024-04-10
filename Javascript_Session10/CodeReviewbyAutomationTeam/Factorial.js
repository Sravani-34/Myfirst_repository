//Program to find factorial of a given no

let num = 7;

if (num<0) {
    console.log ("The factorial of a negative no does not exist");
}
else if (num==0) {
    console.log ("The factorial of the " + num + " is 1.");
}
else {
    let factor = 1
    for(let i = 1; i <=num; i++){
        factor = factor*i;
    }
    console.log("The facorial of " + num + " are " + factor);
}