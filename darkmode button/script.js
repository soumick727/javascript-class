let btn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
btn.addEventListener("click", ()=>{
  
    if(currMode === "light"){
        currMode = "dark";
        body.style.backgroundColor="black"
    }
    else{
        currMode = "light";
        body.style.backgroundColor="white"
    }
    console.log(currMode);
})