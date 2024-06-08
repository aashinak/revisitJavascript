// let arr = [1, 3, 5, 6, 2]
// let anotherArr = arr
// anotherArr.pop()
// console.log(arr); // [ 1, 3, 5, 6 ]
// console.log(anotherArr); // [ 1, 3, 5, 6 ]

// array uses shallow copy

//**Shallow Copy**: Creates a new object,
//but shares references to the same nested objects.

//**Deep Copy**: Creates a new object and recursively copies all nested objects,
//making it completely independent.

// let arr1 = new Array("car", "bike", "plane")
// console.log(arr1);// [ 'car', 'bike', 'plane' ]

// Array methods

let arr2 = [1, 2, 3, 4, 5]
arr2.push(6)
// console.log(arr2); //[1, 2, 3, 4, 5, 6]

// console.log(arr2.pop()); // 6   //arr2 = [1, 2, 3, 4, 5]
// console.log(arr2.length); // 6

arr2.unshift(0) // push to begining of array
// console.log(arr2); [
//     0, 1, 2, 3,
//     4, 5, 6
// ]
arr2.shift()
// console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ] // removed 0

// console.log(arr2.includes(6)); // true
// console.log(arr2.includes(10)); // false

// console.log(arr2.indexOf(10)); // -1 // if element doesnt exist returns -1 otherwise returns index of element
// console.log(arr2.indexOf(5)); // 4

// const newArr = arr2.join("") // 123456
// console.log(arr2.join()); // 1,2,3,4,5,6

// console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr2.slice(1, 3)); // [ 2, 3 ]
// console.log(arr2.splice(0, 3)); // [ 1, 2, 3 ]
// console.log(arr2); // [ 4, 5, 6 ]

  