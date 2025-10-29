// number guess


const minNum = 80;
const maxNum = 90;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let vastus = window.prompt("Arva number vahemikus 80-90")


if(vastus = answer) {
 alert("Arvasid ära");
} else if (vastus < answer) {
alert("Number on natuke suurem!");
} else if (vastus > answer) {
 alert("Number on natuke väike!");
} else {
alert("Sisesta arv!");
}

console.log(answer)
 



