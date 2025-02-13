let h2 = document.querySelector("h2")
console.dir(h2.innerText)
h2.innerText += " from apna college" 
console.dir(h2.innerText)


let divs = document.querySelectorAll(".box")
let i = 1
for (div of divs){
    div.innerText = `new unique value ${i}`;
    console.log(div.innerText);
    i++;
}

divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";
console.log(divs)