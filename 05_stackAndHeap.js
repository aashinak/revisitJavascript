// Stack (primitve), Heap(non primitive)
// In JavaScript, the heap and stack are two different memory spaces that are used to store data. 
// The stack is used to store primitive values and function calls, while the heap is used to store objects and arrays.

let myName = "Aashin"
let nickName = myName
nickName = "Achu"
// console.log(myName); // Aashin
// console.log(nickName); // Achu


let myDetails = {
    name: "Aashin",
    email: "aash@gmail.com"
}

let newDetail = myDetails
newDetail.email = "aashin@gmail.com"
console.log(myDetails); // aashin@gmail.com
console.log(newDetail); // aashin@gmail.com