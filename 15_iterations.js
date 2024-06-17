// for loop
// array iterations
// break and continue
// while and do while loops

// higher order array loops
// @@@@@@@@@@@@@@@@@@@@@@@@@ forof @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let arr = [1, 2, 3, 4, 5]
// for (const val of arr) {
//     // console.log(val);      // 1 2 3 4 5 
// }

// let greetings = "Hello World!"
// for (const greet of greetings) {
//     // console.log(greet);        // H E L L O  W O R L D !
// }

///////////////////// map /////////////////////////
// no duplicate keys in map
// const map = new Map()
// map.set("IN", "India")
// map.set("US", "United States of America")
// console.log(map); // Map(2) { 'IN' => 'India', 'US' => 'United States of America' }
// console.log(map.has("US"));  // true
// map.set("IN", "india") // rewrites value of IN to india not new one created
// console.log(map);

// for (const key of map) {
//     // console.log(key);   // [ 'IN', 'India' ] [ 'US', 'United States of America' ]
// }
// for (const [key, value] of map) {
//     // console.log(`Key: ${key} , Value: ${value}`); // Key: IN , Value: India Key: US , Value: United States of America
// }

// objects not iterable like this
// let myObjects = {
//     game1: "Pubg",
//     game2: "GTA"
// }
// for (const [key, value] of myObjects) {  // myObjects is not iterable
//     console.log(key,value);
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@ forin @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// objects iteration
// let myObjects = {
//     game1: "Pubg",
//     game2: "GTA"
// }
// for (const key in myObjects) {
//     console.log(key); // game1 game2
// }
// for (const key in myObjects) {
//     console.log(myObjects[key]); // Pubg GTA
// }

// array iteration using forin
// let ar = [1, 3, 4, 2, 5]
// for (const key in ar) {
//     console.log(key); // 0 1 2 3 4
// }
// for (const key in ar) {
//     console.log(ar[key]); // 1 3 4 2 5
// }

// map are not allowed to iterate like this
// const map = new Map()
// map.set("IN", "India")
// map.set("US", "United States of America")
// for (const key in map) {
//     console.log(key);
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@ foreach @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let arr = ["india", "france", "germany", "srilanka"]
// arr.forEach(val => console.log(val)) // **

// function printMe(val) {
//     console.log(val);
// }
// arr.forEach(printMe) // same as of above **
arr.forEach((val, index, arr) => {
    console.log(val,index,arr); // india 0 [ 'india', 'france', 'germany', 'srilanka' ]
})


