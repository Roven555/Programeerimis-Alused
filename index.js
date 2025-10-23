let x = Number(prompt("x="));
let y = Number(prompt("y="));

let tehe = prompt("Tehted - (a=liitmine,s=lahutamine,m=korrutamine,d=jagamine,e=astendamine,r=jääk):");

let tulemus;
let symbol;


if (tehe === "a") {
  tulemus = x + y;
  symbol = "+";
} else if (tehe === "s") {
  tulemus = x - y;
  symbol = "-";
} else if (tehe === "m") {
  tulemus = x * y;
  symbol = "*";
}