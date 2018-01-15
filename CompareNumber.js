// Compare Number

// basic Data
var A = 5;
var B = 6;
var C = 10;
var D = 12;

// Level 1
if(A>B){
    console.log("You are a God");
} else {
    console.log("That is the answer");
}

if(A>B){
    console.log("You are a God");
} else if(A>C){
    console.log("You are a super God");
} else {
    console.log("Hehe it is right");
}

// Level 2
(A>B)? console.log("You are a God"):console.log("That is the answer in Ternary");

// Level 3
let E = 5; // the variable in between

let G = 10; // the upper boundary
let F = 1; // the lower boundary
if(E>F && E<G) {
    console.log("Awesome");
} else {
    console.log("Bad");
}

// Level 4
function process(parameterA, parameterB) {
    if(parameterA>parameterB){
        console.log(parameterA + " is bigger than " + parameterB);
    } else {
        console.log(parameterA + " is less than " + parameterB);
    }
  }
  
  process(5,6);

  // Level 5
console.log(Math.random());

// CReating arandome number between 1 to 100
var rand = Math.floor((Math.random()*100)+1);
console.log(rand);