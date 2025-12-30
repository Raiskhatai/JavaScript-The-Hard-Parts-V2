/* Closure function */

function create_function() {
  function multiply_by_2(input) {
    return input * 2;
  }
  return multiply_by_2; // return function reference
}

let generated_func = create_function();
const result = generated_func(3); // now generated_func is multiply_by_2 but in global . no relation with create function create function is deleted. but it 
console.log(result); // 6

// generated_func = create_function();
// -- When the function finishes executing its local memory is deleted [execpt the returned value].

// -- but what if our functions could hold on to live data b/w executions?(next time run the code it have some memory,some rememberance of its previous execution.)

// -- This would let our function definitions have an associated cache/persistent memory.---(that would let our function definitions,the function definition itself.