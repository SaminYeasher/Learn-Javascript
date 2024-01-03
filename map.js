// map


let myMap = new Map(
    [
        ['first key',10],
        ['second key', 'Samin']
    ]
);

myMap.set('third key','Hello World');

//console.log(myMap);
//console.log(myMap.get('second key'));

// Iterate

// for (x of myMap){
//     console.log(x);
// }

// for ([x,y] of myMap){
//     console.log(x,y);
// }

// for (x of myMap.keys()){
//     console.log(x);
// }
// for (x of myMap.values()){
//     console.log(x);
// }
// for (x of myMap.entries()){
//     console.log(x);
// }


// myMap.forEach((x,y) =>{
//         console.log(x,y);
// })


let arr = Array.from(myMap);
let aarr = Array.from(myMap.keys());
let aarrr = Array.from(myMap.values());


console.log(aarrr);