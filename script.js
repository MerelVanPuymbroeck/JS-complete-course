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

/*(function calculate() {
  
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

  */ 
 /*function showresult(choise){
  var n1=parseFloat(document.getElementById('op-one').value);
  var n2=parseFloat(document.getElementById('op-two').value);
  var r;
  var c=choise;
  // defining the type fields
  
  switch(c)
    {
    case 'addition':
      r=n1+n2;
      break;
    case 'substraction':
      r=n1-n2;
      break;
    case 'multiplication':
      r=n1*n2;
      break;
    case 'division': 
      r=n1/n2;
      break;
    default:
      break;
        
    }

    // n1 is our var from our typefield 1, n2 is our var from our typefield 2 , so these numbers we use to make our maths. r= return
  document.getElementById('result').value=r;
  }
  */

/* even squares 
function square()
{
var n=prompt ("Enter a number to generate the table of square numbers from 1 to 25:",""); //alert box to put in the chosen number with a message
var msg=""; // the message / number
var res= "26"; //the max number
 
for(var x= 1; x<=n;x++) // x = 1, if x is less then 25 then put +1 to the number in the alert box "n"
{
res = x * x; // doing the math
msg = msg + " " + x + " * "+ x + " = " + res + "\n"; // to fill in the numbers in the alert box
}
 
alert(msg); //display the messages with the numbers 
} 
*/

/* sort numbers
var submit = document.querySelector('#submit')
var output = document.getElementById('demo')

var points = [2, 4, 14, 10, 90, 23, 16];

output.innerHTML = points;

function sortArray() {
  points.sort(function(a, b) {
    return a - b
  });

  output.innerHTML = points;
}

submit.addEventListener('click', function(event) {
  event.preventDefault()

  sortArray()
})
*/
/* factorial 
function show(){

  var i, no, fact;
  fact=1;
  no=Number(document.getElementById("num").value); // this code is used to recieve the input value of your inputfield
  for(i=1; i<=no; i++)  
  {
  fact= fact*i;
  }  
  document.getElementById("answer").value= fact; // to recieve the calculated number and display it
  }
  */

 (function() {

  for (i=1; i< 100; i++) {
    if ( i % 3 ) {
      console.log ("Fizz"); 
      // i is equal too 1, if i is less then 100 then there comes +1, 
      //if i is divisble with 3 then show "fizz"
    } else if ( i % 5 ) {
      console.log("Buzz"); // but if i is divisble with 5 then show "fizz"
    } else {
      console.log("FizzBuzz") // if there is nothing divisble or less then 100 show "FizzBuzz"
    }
  }
})();
