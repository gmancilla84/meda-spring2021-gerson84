/* 

*
**
***
****
*****
****
***
**
*

*/


// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("***");
// console.log("**");
// console.log("*")

var userHeightValue = 5;
var userCharacterValue = "$";
var currentColumn = "";

for (var i = 0; i < userHeightValue; i++) {
    currentColumn = currentColumn + userCharacterValue;

    console.log(currentColumn);
}

for (var i = 0; i < userHeightValue - 1; i++) {
    currentColumn = removeLastChar(currentColumn);
    console.log(currentColumn);
}


// console.log("currentColumn end: " + currentColumn);

// var asteriskArray = currentColumn.split("");

// console.log(asteriskArray);

// asteriskArray.pop();

// console.log(asteriskArray);

// var newString = asteriskArray.joint("");

// console.log(newString);


function removeLastChar(text) {

    var textArray = text.split("");
    textArray.pop();
    var newText = textArray.join("");

    return newText;


}













// String to Arrays 

// var myString = "Gerson";

// var myNewArray = myString.split("");

// console.log(myNewArray);

// myNewArray.pop();

// console.log(myNewArray);

// var myNewString = myNewArray.join("");

// console.log(myNewString);