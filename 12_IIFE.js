// immediately invoked function expressions
// An Immediately Invoked Function Expression is a function expression 
// that is defined and executed immediately after its creation.
(function chai() {
    // name iife
    console.log('db connected');
})();

console.log("beep");

(() => {
    console.log('db connected twice');
})()