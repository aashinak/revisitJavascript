const accId = 88324
let email = "aash@gmail.com"
var password = "1224568" //prefer not to use var
city = "calicut"
let acState;  // undefined

// accId = 13456 TypeError: Assignment to constant variable.

email = "change@gmail.com"
password = "111111"
city = "kochi"

console.table([{accId : accId, email:email, password: password, city: city}])
/* ┌─────────┬───────┬────────────────────┬──────────┬─────────┐
   │ (index) │ accId │       email        │ password │  city   │
   ├─────────┼───────┼────────────────────┼──────────┼─────────┤
   │    0    │ 88324 │ 'change@gmail.com' │ '111111' │ 'kochi' │
   └─────────┴───────┴────────────────────┴──────────┴─────────┘ */
  
console.table([accId, email, password, city])

// output 👇👇👇
// ┌─────────┬────────────────────┐
// │ (index) │       Values       │
// ├─────────┼────────────────────┤
// │    0    │       88324        │
// │    1    │ 'change@gmail.com' │
// │    2    │      '111111'      │
// │    3    │      'kochi'       │
// └─────────┴────────────────────┘

