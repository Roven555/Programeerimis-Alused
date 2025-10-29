// number guess


const minNum = 80;
const maxNum = 90;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
let katsed = 5

while


let vastus = window.prompt("Arva number vahemikus 80-90. Sul on 5 katset.")


if(vastus = answer) {
 window.alert("Arvasid ära");
} else if (vastus < answer) {
window.alert("Number on natuke suurem!");
} else if (vastus > answer) {
 window.alert("Number on natuke väiksem!");
} else {
window.alert("Sisesta arv!");
}

console.log(answer)
 



