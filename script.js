// let para = document.createElement("button");
// para.innerText = "click me";
// //document.body.append(para);
// para.style.backgroundColor = "red";
// para.style.color = "white";






// document.querySelector("body").prepend(para);

// let par = document.querySelector("p");
// //par.setAttribute("class","p2");



// let mdbtn = document.querySelector("#mode");
// let body = document.querySelector("body");

// let currmode = "light";

// mdbtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(currmode === "light"){
//         currmode = "dark";
//         body.classList.remove("light");
//         body.classList.add("dark");
//         //document.querySelector("body").style.backgroundColor="black";
//     } else{
//         currmode ="light";
//         body.classList.remove("dark");
//         body.classList.add("light");
//         //document.querySelector("body").style.backgroundColor="white";
//     }

//     console.log(currmode);
   
// });



let mdbtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currmode = "light";

mdbtn.addEventListener("mouseover", (e) => {
    e.preventDefault();
    if(currmode === "light"){
        currmode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
        //document.querySelector("body").style.backgroundColor="black";
    } else{
        currmode ="light";
        body.classList.remove("dark");
        body.classList.add("light");
        //document.querySelector("body").style.backgroundColor="white";
    }

    console.log(currmode);
   
});









