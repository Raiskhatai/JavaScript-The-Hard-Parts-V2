function user_creator(name, score) {
  let new_user = Object.create(user_function_store);
  new_user.name = name;
  new_user.score = score;
  return new_user;
}

let user_function_store = {
  increament: function () {
    this.score++;
    console.log(this.score);
  },
  login: function () {
    console.log("login");
  },
};

let new_user1 = user_creator("will", 1);
let new_user2 = user_creator("smith", 9);

new_user1.has_own_property("score");
// console.log(new_user1.__proto__);   // { increament: [Function: increament], login: [Function: login] }

// we can use the has_own_property method - but where is it? is it on user1 ?
// All objects have a __proto__ propery by default which defaults to linking to a big object-Object.prototype full of [somewhat] usefull function.
// we get access to it via userFunctionStore's __proto__ property - the chain.
