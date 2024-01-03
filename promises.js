//promises 
let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout( ()=>{
        a = 1 + 1;
        if (a == 2){
            resolve("Success");
        } else {
            reject("Failed");
        }
    },4000);
})
// .then .catch
prom.then((message) => {
    console.log("I am from then function with " + message);
}).catch((message) => {
    console.log("I am from catch function with " + message);
})


console.log("I am after promise which will excecute first....");