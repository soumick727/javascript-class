// console.dir(document)
// console.log(document.body)
// console.log("hello")

//selecting with id

let x = document.getElementById("heading");
console.log(x)

//selecting with class

let y = document.getElementsByClassName("heading");
console.dir(y)
console.log(y)

//selecting with tag

let para = document.getElementsByTagName("p");
console.log(para);

//selecting with query selector

let elements = document.querySelector("p");
console.log(elements)
console.dir(elements)

let allElement = document.querySelectorAll("p");
console.log(allElement)