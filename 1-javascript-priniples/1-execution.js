// JavaScript code execute hone se pehle poora code scan karta hai (sirf variables & functions), phir run karta hai.
// Is process ko bolte hain Execution Context.

// javascript execution ke 2 phase hey :- 1) memory creation phase 2) execution phase.
// 1) variable and function ko declare karega  :- a -> undefined  ,  function -> pura function.
// 2) line by line execution :
// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10

/* function declare */
// console.log(sum(15, 15));   // 30

// function sum(a, b) {
//   return a + b;
// }

/* global storage and local storage */
// global storage :-
// 1) tab banta jab program start ho. sirf ek baar banta hey.
// 2) yeh global variables function declaration store karta hey .

// local storage :-
// 1) function call par local storage banta hey .
// 2) yeh store karta hey :- function ke parameter,local variables,inner functions

// example of global stoage and local stoage :

// let x = 100;    // x global stoage mey x:50;
// // function add: pura function.
// function add(y) {   // y:20,y me add call ke time 20 aa gaya.
//   let z = 50;   // local storage mey z:50.
//   return (x + y + z);       // return hone par function destory.
// }

// add(20); // 170
