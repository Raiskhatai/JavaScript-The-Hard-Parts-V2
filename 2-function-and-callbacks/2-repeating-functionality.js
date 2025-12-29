// in this page we repeat code multiply time and its break DRY(don't repeat your self) principle and it dont look clean.

//in sabhi function mey pura code same hey but sirf hum kisi mey multiply kis mey divide or kis mey addition kar rhey hey. 
function copy_array_multiply_by_2(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 2);
  }
  return output;
}
console.log(copy_array_multiply_by_2([1, 2, 3])); // [2,4,6];

function copy_array_divide_by_2(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] / 2);
  }
  return output;
}
console.log(copy_array_divide_by_2([1, 2, 3])); // [ 0.5, 1, 1.5 ] ;

function copy_array_add_by_2(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] + 2);
  }
  return output;
}
console.log(copy_array_add_by_2([1, 2, 3])); // [ 3, 4, 5 ] ;
