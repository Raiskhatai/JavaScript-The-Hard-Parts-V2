// Nested Function is a function defined inside another function and can be accessed only within its outer function’s scope

// Inner function outer variables ka reference apne saath bind kar leta hai
// Ye reference Lexical Environment me store hota hai

// is liye counter ki value global mey outer ke delete hone ke baad bhi access kar pa rhey hey.

function outer() {
  let counter = 0;
  function increament_counter() {
    counter++;
  }
  increament_counter();
}

outer();
