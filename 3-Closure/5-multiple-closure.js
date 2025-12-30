// In this example, the outer() function returns an object with two methods: func1() and func2(). func1() is a closure that accesses the x variable from the outer scope and logs its value. func2() is also a closure that increments the x variable.

// When we call closures.func1(), it logs the value of counter, which is 10. When we call closures.func2(), it increments the counter variable to 11. When we call closures.func1() again, it logs the new value of counter, which is 11.

// This example demonstrates how we can create multiple closures that share the same outer scope, and how changes to the outer scope made by one closure are visible to the other closures as well.

function outer() {
  let counter = 0;
  function inner() {
    return counter++;
  }
  return inner;
}

let my_new_function = outer();
console.log(my_new_function()); // 0
console.log(my_new_function()); // 1

let another_function = outer();
console.log(another_function()); // 0
console.log(another_function()); // 1

/* indivitual backpacks */

//if we run outer() and store the returned "inner" function defination in "another function",this new inner function was created in a new execution context and therefore has a brand new independent backpack.
