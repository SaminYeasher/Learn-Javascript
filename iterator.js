let iterable = "hello world";
iterable = [1,2,3,4,5,6,7]
//symbol iterator
let iter = iterable[Symbol.iterator]();
let names = ["rahim","karim", "rony",'jony']


//custom iterator
function customIterator(arr){
    let i = 0;

    return {
        next: function(){
            return i < arr.length ? {value: arr[i++], done: false } : {value: undefined, done : true}
        } 
    }; //will return object
}

let members = customIterator(names);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next());


//console.log(iter);

// console.log(iter.next().value);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());