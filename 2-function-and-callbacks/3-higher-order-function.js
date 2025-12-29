// higher order : A function that takes another function as an argument or returns a function is called a Higher Order Function.

// higher order function se repeatation kam ho gyi.

function copy_array_multiply_by_2(arr, instruction) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(instruction(arr[i]));   // instrunction() -> multiply_by_2();
  }
  return output;
}

function muliply_by_2(input) {
  return input * 2;
}
function divide_by_2(input) {
  return input / 2;
}
console.log(copy_array_multiply_by_2([1, 2, 3], muliply_by_2));
console.log(copy_array_multiply_by_2([1, 2, 3], divide_by_2));
