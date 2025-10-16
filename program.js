// COUNTER PROGRAM

 const decreaseBtn = document.getElementById("decreasebtn");
 const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countLabel")
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
     count--;
    countLabel.textContent = count;
}
