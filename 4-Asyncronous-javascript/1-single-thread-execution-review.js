// JavaScript is single-threaded because it executes one operation at a time using a single call stack, but it can handle async tasks via the event loop.
// Single Threaded = Ek line, ek kaam, ek ke baad ek (synchronously).

const num = 3;
function multiply_by_2(input_number) {
  const result = input_number * 2;
  return result;
}

const output = multiply_by_2(num);
const numoutput = multiply_by_2(10);
console.log(output); // 6
console.log(numoutput); // 20 
