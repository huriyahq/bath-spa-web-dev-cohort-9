// JavaScript Tasks


// TASK 1
// Console log two variables
let x = 5;
console.log(x);

let y = 10;
console.log(y);

// TASK 2
// Create a function that takes two parameters
function myFunction(x, y) {
    // The function adds the params together then multiplies them by another number
    let total = (x + y) * 2;
    // The total will show up on console when the function is called
    console.log(total);
}

// Call above function using prev declared variables as params
myFunction(x, y);

// TASK 3
// Create two new string variables
let firstName = "Harry";
let lastName = "Potter";

// Concat the string variables into one string
let fullName = firstName + " " + lastName;
 
// Console log concatenated string
console.log(fullName);

// TASK 4
// Create an empty string variable
let myString = "";

// Assign a new string value to the empty string
myString += "Hello";

// Now assign another string value to the string variable
myString += " World!";

// Console log the result
console.log(myString);


// TASK 5
// Create a function that will compare two variables
function compareMe(a, b) {
    // The function will see if the variables match
    if (a === b) {
        // if the variables match, the user will get an alert to say they match
        alert("It's a match!");
    } else {
        // if they don't match, the user will get an alert to say they don't match
        alert("Sorry, these don't match");
    }
}