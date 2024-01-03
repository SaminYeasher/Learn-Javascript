let mySet = new Set([1,2,3,4]);

mySet.add('Hello World');
mySet.add(2);
mySet.delete(4);
//mySet.clear();



//print set
// console.log(mySet);
// console.log(mySet.size);

//check member
//console.log(mySet.has(2));

// Iterating Sets


// for (x of mySet){
//     console.log(x);
// }



// let iter = mySet.entries();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());



// for (let [x] of mySet.entries()){
//     console.log(x);
// }

// let iter = [...mySet.values()];
// console.log(iter);


mySet.forEach(value => console.log(value));