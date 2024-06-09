const marvel_heroes = ["ironman", "thor", "spiderman"]
const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes) // [ 'ironman', 'thor', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

// const allHeroes = marvel_heroes.concat(dc_heroes) // [ 'ironman', 'thor', 'spiderman', 'batman', 'superman', 'flash' ]

// const newHeroes = [marvel_heroes, dc_heroes]
// [
//     [ 'ironman', 'thor', 'spiderman' ],
//     [ 'batman', 'superman', 'flash' ]
// ]


// const newHeroes = [...marvel_heroes,...dc_heroes]
// ['ironman', 'thor', 'spiderman', 'batman', 'superman', 'flash']


// const arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13]], 14]
// const newArr = arr.flat(Infinity)
// [
//     1,  2, 3,  4,  5,  6,
//     7, 8, 9, 10, 11, 12,
//     13, 14
// ]


// console.log(Array.isArray("Aashin")); // false
// console.log(Array.from("Aashin")); // [ 'A', 'a', 's', 'h', 'i', 'n' ]
// console.log(Array.from({name: "Aashin"})); // []

// const anotherArrayLikeObject = {
//     0: 'apple',
//     1: 'banana',
//     length: 2
//   };
// const anotherResultArray = Array.from(anotherArrayLikeObject);
// console.log(anotherResultArray); // ["apple", "banana"]

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]

  
  

