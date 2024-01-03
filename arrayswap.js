var a = 2;
var b = 3;
let showstext = document.getElementById("showtext").textContent = "Before swap a =" + a + " b = " + b ;

[a,b]=[b,a];

let showtext = document.getElementById("nextshow").textContent = "After swap a =" + a + " b = " + b ;

console.log( `a = ${a} and b = ${b}`);