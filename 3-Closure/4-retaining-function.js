// The "retain function" aspect of closures in JavaScript refers to the ability of an inner function to retain a reference to the variables and parameters of its outer function, even after the outer function has returned.

// When an inner function is defined inside an outer function in JavaScript, the inner function has access to all of the variables and parameters of the outer function. This is because the inner function is defined within the scope of the outer function, and so it can "close over" those variables and retain a reference to them.

function outer() {
  let counter = 0;
  function inner() {
    return counter++;
  }
  return inner;
}

let val = outer();
console.log(val());
console.log(val());
console.log(val());

// In this example, the inner() function retains a reference to the counter variable from its outer scope, even after the outer() function has returned. This is possible because the inner() function is defined within the scope of outer(), and so it can "close over" the counter variable and retain a reference to it.

// When we call innerFunc(), it outputs the value of counter, which is still accessible to the inner() function, even though outer() has already returned.
