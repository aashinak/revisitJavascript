// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ filter @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let myArr = arr.filter(item => item > 4)
// console.log(myArr); // [ 5, 6, 7, 8, 9 ]
// same thing in foreach
myArr = []
arr.forEach(item => {
    if (item > 4) {
        myArr.push(item)
    }
})
// console.log(myArr);

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let nums = newArray.map(num => num * 10).map(num => num / 10)
// console.log(nums); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
let nums = newArray.map(num => num * 10)
                   .map(num => num + 1)
                   .filter(num => num >= 40)
// console.log(nums); // [ 41, 51, 61, 71, 81, 91 ]

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ reduce @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let redArray = [1, 3, 5, 9, 2] // sum = 20
// let redVal = redArray.reduce((acc, curr) => acc + curr, 10 /*->initial value */ )
// console.log(redVal); // 30
//--------------------------------------------------------------------------------
let redVal = redArray.reduce((acc, curr) => { 
    console.log(`acc: ${acc}, curr: ${curr}`)
    return acc + curr
}, 0)
// acc: 0, curr: 1
// acc: 1, curr: 3
// acc: 4, curr: 5
// acc: 9, curr: 9
// acc: 18, curr: 2
console.log(redVal); // 20
//--------------------------------------------------------------------------------