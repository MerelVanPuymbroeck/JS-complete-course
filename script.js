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

(function calculate() {
  
  document.getElementById("addition").addEventListener("click", function() {
    let field1 = document.getElementById('op-one').value;
    let field2 = document.getElementById('op-two').value;
  
    let result = parseFloat(field1) + parseFloat(field2);
    if(result){
        alert(result)
        // let result = parsefloat(field1) --> the number you put in there + (to make the math) parseFloat(field2) 
        //the second number you put in there then alert the result of this math
    }
  });
  
  document.getElementById("substraction").addEventListener("click", function() {
      let field1 = document.getElementById('op-one').value;
      let field2 = document.getElementById('op-two').value;
  
      let result = parseFloat(field1) - parseFloat(field2);
      if(result){
          alert(result)
       } // perform an substraction
  });
  
  document.getElementById("multiplication").addEventListener("click", function() {
      let field1 = document.getElementById('op-one').value;
      let field2 = document.getElementById('op-two').value;
  
      let result = parseFloat(field1) * parseFloat(field2);
      if(result){
          alert(result)
       }// perform an multiplication
  });
  
  document.getElementById("division").addEventListener("click", function() {
      let field1 = document.getElementById('op-one').value;
      let field2 = document.getElementById('op-two').value;
  
      let result = parseFloat(field1) / parseFloat(field2);
      if(result){
          alert(result)
       }// perform an division
  });
  })();