//practice1
let newbtn = document.createElement("button");
newbtn.innerText = "click me!";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn)

//practice2
let para = document.querySelector("p")
console.log(para.setAttribute("class","newClass"));


// let p = para.setAttribute("content","newClass");
// console.log(p)