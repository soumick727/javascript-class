// let bt1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a = 29;
//     a++;
//     console.log(a);
// }


let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", (e) => {
    console.log("button was clicked-handler1");
    console.log(e);
    console.loog(e.type);
})
btn1.addEventListener("click", (e) => {
    console.log("button was clicked-handler2");
   
})

const handler3 = () => {
    console.log("button was clicked-handler3");
}

btn1.addEventListener("click",handler3);
btn1.addEventListener("click", (e) => {
    console.log("button was clicked-handler4");
  
})
btn1.addEventListener("click", (e) => {
    console.log("button was clicked-handler5");
    
})

btn1.removeEventListener("click",handler3);


let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
}