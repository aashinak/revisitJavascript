// constructor method , singleton
// Object.create

// Object literals
let myKey = Symbol("key1")
let newOb = {
    name: "Aashin",
    "fullName": "Aashin A K",
    [myKey]: "sym",
    age: 21,
    profession: "Mern developer"
}
// console.log(newOb.name); // Aashin
// console.log(newOb["name"]); // Aashin
// console.log(newOb["fullName"]);
// console.log(newOb.fullName);
// console.log(newOb[myKey]);  // if only myKey used it will only consider as string
                            // to refer symbol we have to use [myKey]
// newOb.age = 20
// Object.freeze(newOb) // will freeze entire object from overwriting
// newOb.age = 21
// console.log(newOb.age);


// newOb.greeting = function () {
//     console.log("Hello JS user");
// }
// newOb.greeting() // Hello JS user

// newOb.greeting2 = function () {
//     console.log(`Hello ${this.fullName}`);
// }
// newOb.greeting2() // Hello Aashin A K

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ NEXT PART @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// let objct = {
//     email: "aash@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Aashin",
//             lastName: "A K"
//         }
//     }
// }

// console.log(objct.fullName?.userFullName.firstName); // if no fullName exist return undefined "?"

let obj1 = { 1: "one", 2: "two" }
let obj2 = { 3: "three", 4: "four" }
// console.log({ obj1, obj2 });
// {
//     obj1: { '1': 'one', '2': 'two' },
//     obj2: { '3': 'three', '4': 'four' }
// }
// console.log({ ...obj1, ...obj2 }); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }
// let returnedObj = Object.assign(obj1, obj2)
// console.log(returnedObj); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }
// console.log(obj1); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

// let returnedObj = Object.assign(obj1, obj2)
// in this obj2 is combined to obj1 ie, value of obj1 changes to obj1+obj2
// in order to tackle this problem use {} infront of combining objects

let returnedObj = Object.assign({}, obj1, obj2)
// console.log(returnedObj);
// console.log(obj1);

// { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }
// { '1': 'one', '2': 'two' }

console.log(Object.keys(returnedObj)); // [ '1', '2', '3', '4' ]
console.log(Object.values(returnedObj)); // [ 'one', 'two', 'three', 'four' ]
console.log(Object.entries(returnedObj)); // [ [ '1', 'one' ], [ '2', 'two' ], [ '3', 'three' ], [ '4', 'four' ] ]
console.log(returnedObj.hasOwnProperty("4")); // true



