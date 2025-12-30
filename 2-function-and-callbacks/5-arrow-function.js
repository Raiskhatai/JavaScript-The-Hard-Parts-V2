// Arrow function JavaScript me function likhne ka short & modern syntax hai. ES6 (2015) me introduce hua tha.
// Arrow function ek compact way hai function likhne ka, jisme function keyword use nahi hota aur => (arrow) use hota hai.

// normal function :
// function multiply_by_2(input){return input*2};

// arrow function
// let multiply_by_2 = (input) => {return input * 2};
// let multiply_by_2 = (input) => input * 2;
// let multiply_by_2 = input => input * 2;
// console.log(multiply_by_2(2));

function copy_array_manipulate(arr, instrunction) {
  let outer = [];
  for (let i = 0; i < arr.length; i++) {
    outer[i] = instrunction(arr[i]);
  }
  return outer;
}

// let multiply_by_2 = (input) => input * 2;
// let op = copy_array_manipulate([2, 4, 6], multiply_by_2);

let op = copy_array_manipulate([2, 4, 6], (input) => input * 2);
console.log(op); // [ 4, 8, 12 ];
