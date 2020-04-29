let x=document.querySelector(".calculator")

console.log(x)

let screen = document.querySelector("#screen")

// screen.textContent=""

let one = document.querySelector("#one");

one.addEventListener("click",function(){screen.textContent+=1});
// twoClick.addEventListener("click",function(){screen.textContent+=1});

for (let num of document.querySelectorAll(".numberButton")){num.addEventListener("click", function(){screen.textContent+=num.id});}