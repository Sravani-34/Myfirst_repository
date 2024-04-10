// To check what arthimatical operation should be done
//Please check the alignment  use camel case for declaration of variable
function performoperation(x, y, action) {    if (action === "+") {
  //Semicolon is missing
      console.log(x + y)
    } else if (action === "-") {
      console.log(x - y);
    } else if (action === "*") {
 console.log(x * y);
    } else if (action === "/") {
            console.log(x / y);
    } else {
      console.log("Pass Valid Action like + or - or * or /");
    }
  }
  performoperation(20, 10, "-");