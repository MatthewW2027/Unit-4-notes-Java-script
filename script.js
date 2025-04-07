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

/* Functions are like RECIPES!
    relaiably perform the same set of actions for a consistent result. 
    PARAMETERS (input) are like ingrediants. 
    RETURN values (output) are like the completed meal a
*/ 

// Sandwich making exampl ofa function that requires PERAMETERS and RETURNS data 
// (takes input provide, provides output)

function makeSandwich(bread, filling, sauce) {
    // function BODY (procedure steps)
    let sandwich = filling + "sandwich with" + sauce + "on" + bread; 
    return sandwich; 
}
// Call a function that RETURNS data 
// store the output in a variable 
let burger = makeSandwich("bun", "patty", "American Cheesse");
console.log(burger);

// TRY the function with different ARGUMENTS (input data)
let grilledcheesse = makeSandwich("white bread", "American Cheesse", "Butter");
console.log(grilledcheesse)

// *** Selection (CONDITIONALS) *** 
// A Conditional expression is like a Question where a boolean (Ture/Flas) is the ANSWER

// Conditions that include COMPARISON OPERATORS get EVALUATED and result in true/false 
console.log(2 > 1); // true
console.log(2 == 1);  // == means are they equal? 
console.log( 2 != 1); // != means NOT equal 
console.log(29035739805672093547129045802493 >= 356457);
console.log( 45 <= 2);

// ASSIGN a comparison result to a variable 
let result = (5 > 4); 
console.log(result); 

// Comparing STRINGS (text) uses dictionary order 
// TRUE  if letter is later in order 
console.log("Z" > "A"); 
console.log("Danny" == "Zach");

// Use CONDITIONS in IF STATEMENTS to make DECISIONS about which code to execute 
let age = 17; 
// "is the VALUE of the age variable equal to 16?"

if (age == 16) {
    // code below only runs if the condition above is TRUE 
    console.log("Happy Sweet Sixteen!") 
}

else {
    // code below runs when the IF block is FLASE 
    console.log("happy birthday!");
}

// Use ELSE IF blocks to test multiple options 
age = 15; // change value of age variable 
if (age == 18) {
    console.log("Congrats on becoming an adult!");
}

else if (age > 18) {
    console.log("Go vote!!"); 
}

else {
    console.log("too young to vote..")
}