// Ask the user for two integers
let a = prompt("a = ?");
let b = prompt("b = ?");

// Convert the input strings to integers
a = parseInt(a);
b = parseInt(b);

// Calculate the sum
let sum = a + b;

// Display the result on the page
document.getElementById("result").textContent = "The sum is: " + sum;