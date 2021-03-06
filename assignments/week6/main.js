// how to USE a function: functionName();
console.log("Good Morning Gerson!");

console.log("Goodbye!");

// Variables

// DEFINING a Variable in our program
var myFirstVariable;
myFirstVariable = "My name is Gerson.";
console.log(myFirstVariable);

var mySecondVariable = "My name is Earl";

// The Three most common Dataypes

// Strings
"My name is Gerson.";
'What is your name?';

// Number
10;
9;
20;
0;
10000000;
10.5;
-10.5;
"10"; // NOT A NUMBER, it is a String instead.

// Boolean
true;
false;


//Mathematical Operators
(10 + 10); // 20 Addition - > Sum
(5 - 10); // -5 Subtraction - > Difference
(2 / 5); // .40 Division - > Quotient
(10 * 5); // 50 Multiplication - > Product
(10 % 3) // 1 Modules - > Modulo

// 105 % 2 == 1; IS ODD NUMBER
// 104 % 2 == 0; IS EVEN NUMBER



var myMostImportantNumber = (50 - 10);

console.log(myMostImportantNumber);

var currentCTemp = 100;

var cToF = ( (currentCTemp * (9/5) ) + 32) ;

console.log(cToF);

// Logical Operators

// == Equal to

(100 == 100); // becomes a true
(101 == 100); // becomes a false
(101.1 == 101.2); // different values, so becomes false
("raining" == "sunny"); // becomes a false
("raining" == "raining"); // becomes a true
("Raining" == "raining"); // becomes false because of different character.
(" raining" == " raining"); // false beacuse of the extra character "space"
(true == true); //true
(true == false); //false
(false == false); //true

// >, <, >=, <=   Greater Than, Lesser Than, Greater than or Equal to, Lesser than or Equal to

(100 > 40); // true
(100 < 40); // false
(-100 < 40); // true
(100 <= 100); //true
(99 <= 100); // true

// != Not Equal to
(100 != 100); // false
(100.1 != 100); // true



(mySecondVariable == "Gerson"); // false


// Boolean Operators

// NOT operator
!false; // true
!true; // false

// || OR operator

(true || false); // true
(false || true); // true
(false || false); // false

// && AND operator

(true && false);// false
(true && true); // true


(false || true || false);
//becomes
(true || false);
//becomes
true;


(100 == 100 || 50 ==51 || mySecondVariable == "Gerson");
//becomes
true || mySecondVariable == "Gerson";


var someData = "important";
someData = "not so important"

// Arrays & Objects

var myFirstArray = ["important" , "not so important"];

var daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];



console.log(myFirstArray[0]);

console.log(daysOfWeek[4]);

daysOfWeek[7] = "Superday";

daysOfWeek[2] = "Whensday"

console.log(daysOfWeek);

// Array Functions

// array.push() Adds the value to the END of the array.

myFirstArray.push("hello!");

console.log(myFirstArray);

// array.pop()Removes the value at the END of the array.

myFirstArray.pop();

console.log(myFirstArray);

// array.unshift() Add the value to the START of the array.

myFirstArray.unshift("sunny day");

console.log(myFirstArray);

// array.shift() Removes the value at the START of the array.

myFirstArray.shift();

console.log(myFirstArray);

// array.splice()

daysOfWeek.splice(3, 0, "Breakday");

console.log(daysOfWeek);


// Objects

var ordertaker = {
    "firstName": "Gerson",
    "job": "Omni",
    "age": 36
};

var myThirdArray = ["Gerson", "Omni", 36];

console.log(ordertaker["firstName"]);
console.log(ordertaker.job);

ordertaker.job = "OmniSF";

// Adds a new
ordertaker.favFood = "Burrito"
ordertaker.age = null

// Remove the key value pair from the object.
delete ordertaker.age;

console.log(ordertaker);


console.log(typeof []);



// Conditional Statements, If statement needs to have a true value in order to run/execute the code in its code block.

//Conditional statement syntax
// if (true or false value) { code to run based on condition in parenthesis.}

if (ordertaker.firstName == "Gerson") {
    console.log("Welcome to our website, Gerson");
}


var numberToTest = 0;

if (numberToTest > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is NOT positive");
}

console.log("Hello");

if (numberToTest == 0) {
    console.log("The number is a zero");
} else {
    console.log("The number is negative");
}

if (numberToTest == 0) {
    console.log("The number is negative");
} else {
    console.log("The number is NOT negative");
}






var personAge;

personAge = 22;

var personLikesDrinking = true;


if (personAge >= 21 && personAge <= 25) {
    console.log("Congratz! You are of drinking age!");

    if (personLikesDrinking == true) {
        console.log("What alcholic drink do you like?");
    }

} else if (personAge >= 26 && personAge <= 40) {
    console.log("Do you want to go grab a beer?");
} else { 
    console.log("Have you tried video games?");
}


// While Loop, CHECK FIRST if condition is true, if true THEN run code block.
var continueRunning = 0;

while (continueRunning < 10) {

    console.log("We ran the loop once!");

    continueRunning = continueRunning + 1;

    var count = 0

    //while (count < 10) {
    //    console.log("inner loop ran!");
    //    count = count + 1;
        

    //}
}

var personAnswer = "no";

// Do While Loop, runs code block FIRST, then checks the condition.
do {
    console.log("Ran one loop!");

    // alert("Congratulations you are the millionth visitor! Collect your prize free iPad.");

} while(personAnswer == "yes");


// For loop, "condition" are has THREE parts
// syntax: for (counter; condition; iterator) {}

for (var keepRunning = 0; keepRunning < 10; keepRunning = keepRunning +1) {
    console.log("This for loop ran once!");
}


for (var i = 0; i < 10; i++) {


    //if (valueAlreadyFound == true) {
        // If the progam ever hits this keyword, it will end the loop completely.
    //    break;
    // }


   // if (color == "red") {
        // If the program hits this keyword, it will end this specific iteration.
    //    continue;
    //}

    console.log("the color is blue");
}


// double plus, adds a 1 to the variable.
// double minus, removes a 1 from the variable.
// i++ is the same as i = i + 1





// .forEach(); A function for arrays that goes through each element of the array and does something.

var someArray = [10, 20, 30, 40, 50]

someArray.forEach(function (arrayValue) {
    console.log(arrayValue + 100);
});


// Functions 

function myFirstFunction() {
    console.log("hello from first function!")
}


myFirstFunction();
myFirstFunction();
myFirstFunction();


// Parameters (fancy name for Variable that belong to a function) and Arguments (fancy name for the value of a parameter.)

// Parameters are written within the parenthesis of the DEFINITION

function addTwoNumbers(firstNumber, secondNumber) {
    var total = firstNumber + secondNumber;

    console.log(total);
}

// this variable doesn't exist because it only lives inside the addTwoNumbers function: console.log(firstNumber);


// Arguements are written within the parethesis of the CALL.

addTwoNumbers(10, 1);
addTwoNumbers(100, 5);
addTwoNumbers(-5, 10);


// Returing values from Functions


// Concatenation (fancy word for); combining two strings.

function makeExciting(sentence) {

    var excitingSentence = sentence + "!!!";

    console.log(excitingSentence);

    return [sentence, excitingSentence, 1000];
}



var savedSentence = makeExciting("How are you doing");
var savedSentence2 = makeExciting("Would you like ice cream");

console.log("The Value: " + savedSentence);


// Example function, Math Summarizer;

function mathSummarizer(num1, num2) {

    var sum = num1 + num2;
    var difference = num1 - num2;
    var differenceReversed = num2 - num1;
    var quotient = num1 / num2;
    var quotientReversed = num2 / num1;
    var product = num1 * num2;

    //return [sum, difference, differenceReversed, quotient, quotientReversed, product];

    var object = {
        "Sum": sum,
        "Difference": difference,
        "DifferenceReversed": differenceReversed,
        "Quotient": quotient,
        "Quotion Reversed": quotientReversed,
        "Product": product
    };

    return object;
}


function mathForMe(num1, num2) {

    var number1 = num1;
    var number2 = num2;
    var results = mathSummarizer(number1, number2);

    for (var keyName in results) {

        console.log("The " + keyName + " of " + number1 + " and " + number2 + " is " + results[keyName]);

    }

    console.log(" ");
}

mathForMe(10, 20); // Each of these calls are  equivalent to ~25 lines of code

mathForMe(50, 100);

mathForMe(54,234);

// var number1 = 50;
// var number2 = 100;
// var results = mathSummarizer(number1, number2);

// console.log(results);

//v ar sumSentence = "The sum of 9 and 15 is " + results["Sum"];
// var sumSentence = "The product of 9 and 15 is" + results["Product"];

// console.log(sumSentence);

//for (var keyName in results) {

//   console.log("The " + keyName + " of " + number1 + " and " + number2 + " is " + results[keyName]);






// NaN: Not a Number, meaning you multiplied or divided by a value that cannot be multiplied or divided. Example: console.log(mathSummarizer(0, 0));

// Infinity: what is this?


