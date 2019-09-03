/* becode/javascript
 *
 * /01-base/01-var-alert/script.js - 1.1: var & alert
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*(function helloWorld() {
    alert ("Hello World");

    // your code here

})();*/
// function to display a string

/*(function name() {

    let name = prompt("What is your name?");
    alert("Hello, " + name + "!");

})();*/

// function to make a prompt where you can fill in your name and display it with another string in the alertbox


/*(function pieceOfCake() {

    var cake = prompt("Piece of cake?")
    if(cake=="yes") {
    alert("Congrats! Here is your piece!")
    } 
    else {
    alert("Oh, more for me!")
    }
  
  })();
  */

 // prompt if statement, if my var is equal too the string yes then...else we got another string of text.
 
 /* (function() {

    // your code here
    let userAge = prompt("What's your age");
    let userGender = prompt("Whats your gender");
    let userLives = prompt("Where do you live?")
    
    alert(
        `
        Your age is: ${userAge}
        You are: ${userGender}
        You live in: ${userLives} `)
    })();

 */

/*var inputIdFirst = "valueOfX",inputIdSecond = "valueOfY",outputId = "resultHere";
var getInputs = function(id) {
  return parseInt(document.getElementById(id).value);
}
var showOutput = function(outputValue, outputIdAsArg) {
  //if no argument is given then by default "outputId" taken
  document.getElementById(outputId).innerHTML = outputValue;
}
var manuplateAs = function(operationName, valueOfX, valueOfY) {
  if(operationName == 'add')
    return valueOfX + valueOfY;
  else if(operationName == 'sub')
    return valueOfX - valueOfY;
  else if(operationName == 'mul')
    return valueOfX * valueOfY;
  else if(operationName == 'div')
    return valueOfX / valueOfY;
  //can add as many as you wish 
} 
var operation = function(operationName){
  x = getInputs(inputIdFirst);
  y = getInputs(inputIdSecond);
  output = manuplateAs(operationName, x, y);
  showOutput(output);
  console.log(x + " " + operationName + " " + y + " = " + output)
  //see console to understand this more
  console.log(this)
}; */

