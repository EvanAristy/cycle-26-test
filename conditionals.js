// ====Conditionals====
// Definition: perform different operations based on the given condition

//Task: define whether a number is positive or negative

let integer = -1

// inside the parenthesis in an if statement, we write a logical statement checking whether it's true or false 
if (integer < 0) {
            //inside the curly brackets is out code block that runs If we meet our condition
    console.log("Negative:" + integer)
}
else {
    // if we didn't meet our logical statement, else code block will execute
    console.log("Positive: " + integer)
}

// Task: Setting up a security website that grants users over the age of 18+ access to the site. Write a conditional that gives users who are 18+ access denied for users who do not meet the given condition.

//create if statement checking if age is over 18+ and if less than 18 log access denied

let age = 16

if (age>=18) {
    console.log("Access Granted")
}
// else does not accept conditional statement
else {
    console.log("Access Denied")
}

// Task:
/* 
  Nested if/else statement
  Declare a variable called num
  Add an if/else statement that checks if num is positive & greater than 100
  Add another statement to check if num is positive but less than 100
  Add a final statement to check if num is negative
*/

let num = '100'

// & is called ampersand
// && equals to AND
if(num > 100) {
  console.log(num + " is positive and greater than 100")
} else if(num < 100) {
  if(num > 0) {
    console.log(num + " is positive and less than 100")
  }
} else if(num < 0) {
  console.log(num + " is less than 0 AKA negative.")
} else {
  if(num === 100) {
    console.log("WE GOT A HUNDRED!!!")
  } else {
    console.log("error NaN " + num + " is a " + typeof(num))
  }
}

// Task: What is your letter grade?
/* 
  If student gets 90 or higher: log A
  If 80 or above: log B
  if 70 or above: log C
  if 55 or above: log D
  if below 55: log F
*/

// Java script runs top to bottom

let grade = 100

if (grade >= 90) {
console.log("A")
}
else if (grade >= 80) {
    console.log("B")
}
else if (grade >= 70) {
    console.log("C")
}
else if (grade >= 55) {
    console.log("D")
}
else {
    console.log("F")
}















