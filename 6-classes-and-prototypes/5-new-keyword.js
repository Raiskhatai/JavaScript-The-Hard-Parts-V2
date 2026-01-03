// new keyword JavaScript me ek constructor function ke through naya object create karne ke liye use hota hai.
// The new keyword creates a new object, sets this to that object, links it to the constructor’s prototype, and returns the object.

function multiply_by_2(num) {
  return num * 2;
}

multiply_by_2.stored = 5;
console.log(multiply_by_2(3)); // 6
console.log(multiply_by_2.stored); //5
console.log(multiply_by_2.prototype); // {}

// we could use that fact that all function have a default property 'prototype' on thier object version.

function user_creator(name, score) {
  this.name = name;
  this.score = score;
}

user_creator.prototype.increament = function () {
  this.score++;
  console.log(this.score);
};

user_creator.prototype.login = function () {
  console.log("login");
};

const user1 = new user_creator("will", 1);
user1.increament(); // 2
