/* This is a MULTI-LINE COMMENT
Below is an example JS STATEMENT 
(instruction/command) 
Every STATEMENT ends with a SEMICOLIN (;)
console.log is a FUNCTION that displays info 
*/
console.log("hello there");
console.log("general kenobi");

// This is a SINGLE LINE COMMENT 

// DECLARE a new VARIABLE to hold some data 
let pokemon; 

// ASSIGN a VALUE to that variable 
// like putting an item in a box 
pokemon = "pikachu" ; 

// DECLARE + ASSIGN in one statement 
let name = "matthew"; 

// DECLARE a new variable (buying a box) 
let luckyNumber; 

// ASSIGN a value to that variable (putting an item in a box) 
luckyNumber = 5421;

// DECLARE + ASSIGN in one statement 
let worstNumber = 22; 

// You can "PASS IN" a VARIABLE into a FUNCTION 
console.log(luckyNumber);
console.log(worstNumber); 

// can CHANGE the value stored in a variable 
let mood = "Happy"; 
console.log(mood); 
mood = "Sad";   
console.log(mood); 

// Can COPY the value from one variable into another 
let isHappy = true; 
let isThrilled; 
isThrilled = isHappy; 
console.log(isThrilled);

// MATH OPERATIONS 
let score = 0; 
score = + 5;
console.log(score);  
score = score - 10 
console.log(score); 
score = score * (-3); 
console.log(score); 
score = score / 5; 
console.log(score); 

// STRING CONCATENATION (merging/combination) 
// QUOTES indicate STRING LITERALS 
let greeting = "hello" + "Friend"; 
console.log(greeting);

//Can combine string variables with string LITERALS 
let username = "ct112120"; 
greeting = "Welcome" + username + "!!!"; 
console.log(greeting);

//Watch out for STRING CONVERSIONS 
console.log(4 + 5); // 9 (adds the numbers)
console.log("4" + 5); // 45 (concatenate, not add) 
console.log(4 + '5') // 45 (same as above!)

/* FUNCTIONS:
    Reusable sets of code statements that perform a specific task or process 
*/ 

// example of CALLING a function 
console.log("heloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"); 

// example of DECLARING (creating) a function 
function flying() {
    // 3 statements (steps/instructions)
    console.log("1. battery and gpu")
    console.log("2. MCDU")
    console.log("3. engine start")
}
// To CALL (run) out function, say its name 
flying();
flying(); // repeated the steps again 