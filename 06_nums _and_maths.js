const score = 400
const balance = new Number(400)

// console.log(score);
// console.log(balance); [Number: 400]
// console.log(score+balance); 800

// console.log(typeof balance.toString()); string

// console.log(typeof balance.toFixed(2)); // 400.00 string
const anNum = 34.662
// console.log(anNum.toPrecision(3)); // 34.7  string
// console.log(anNum.toPrecision(2)); // 35  string
// console.log(anNum.toPrecision(1)); // 3e+1      string

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 string



// +++++++++++++++++++++++++++++++++++ maths +++++++++++++++++++++++++++++++++++++

// console.log(Math.PI); //3.141592653589793
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //////// important \\\\\\\\\


