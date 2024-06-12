// var -> global
// let -> block
// const -> block

// function one() {
//     let oneVal = "One"

//     function two() {
//         let twoVal = "two"
//         console.log(oneVal);
//     }
//     // console.log(twoVal); // twoVal is not defined ie, twoVal cannot be accessed
//     two()
// }
// one()

// first() // First
// function first() {
//     console.log("First");
// }

// second() // ReferenceError: Cannot access 'second' before initialization
// const second = function () {
//     console.log("Second");
// }