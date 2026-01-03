// A factory function is a function that creates and returns an object without using the new keyword.
// factory function se objects banane ka code repeat nhi karna padta.

function user_creator(name, score) {
  let new_user = {};
  new_user.name = name;
  new_user.score = score;
  new_user.increament = function () {
    new_user.score++;
    console.log(new_user.score);
  };
  return new_user;
}

const new_user1 = user_creator("will", 3);
const new_user2 = user_creator("saim", 7);
console.log(new_user1.increament()); // 4
console.log(new_user2.increament()); // 8

