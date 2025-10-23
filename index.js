const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("PaypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed!!`;
  } else {
    subResult.textContent = `You are NOT subscribed`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `You must select a payment type`;
  }
};
/*
let a = prompt("a = ?");
let b = prompt("b = ?");

a = parseInt(a);
b = parseInt(b);

let sum = a + b;

document.getElementById("result").textContent = "sum on: " + sum;
*/

var a = 10;
var b = 20;

var temp = a;
a = b;
b = temp;

document.write("a = " + a + ", b = " + b);
