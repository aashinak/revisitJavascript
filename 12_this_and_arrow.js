const user = {
    name: "Aashin",
    age: 21,
    welcomeMessage: function () {
        console.log(`hello ${this.name}`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.name = "champ"
// user.welcomeMessage()

// function chai() {
//     console.log(this);
// }
// chai()

// const chai = () => {
//     console.log(this); // {}
// }
// chai()

const addNum = (num1, num2) => num1 + num2
// const addNum = (num1, num2) => (num1 + num2)
// console.log(addNum(2,3));

// let arr = [6, 6, 3, 2, 7, 8]
// arr.forEach(x => console.log(x))




