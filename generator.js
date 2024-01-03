function* genFunction(){
    console.log("I am some code");
    yield 1; 
    //console.log("I am some code");
    //console.log("I am some code");
    //console.log("I am some code");
    //return;
    yield 'rahim';
    yield 4
    yield "kakrol";
    yield "hello world";
}

let iter = genFunction();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());