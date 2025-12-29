// Higher Order Function:
// A function that takes or returns another function.

// Callback Function:
// A function passed as an argument to another function to be executed later.

// // ex 1 :-
// // higher order function
// function H_O_F(fun) {
//   console.log(fun());
// }
// // call back function
// function c_b() {
//   return "hello";
// }

// // H_O_F function ne argument mey c_b funtion liye.
// H_O_F(c_b);

// ex 2 :-
// ()=>{} yeh arrow function ka name hof mey akar c_b ho gaya jab c_b call karte hey to arrow function run ho jata hey.
// function H_O_F(c_b) {
//   c_b();
// }

// H_O_F(() => {
//   console.log("hi");
// });
