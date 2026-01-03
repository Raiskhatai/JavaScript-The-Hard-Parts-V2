//  this keyword ka kaam hota hai current context (matlab jis object ya function ke andar this use ho raha hai) ko point karna. Ye different situations mein alag alag objects ko refer karta hai.

// Arrow function ka apna this nahi hota.
// Arrow function this ko apne parent (outer) scope se uthata hai. Isko kehte hain lexical this.

// function user_creator(name, score) {
//   let new_user = Object.create(user_function_store);
//   new_user.name = name;
//   new_user.score = score;
//   return new_user;
// }

// let user_function_store = {
//   increament: function () {
//     this.score++;
//     console.log(this.score);
//   },
// };

// let new_user1 = user_creator("will", 1);
// let new_user2 = user_creator("smith", 9);
// new_user1.increament(); // 2;

function user_creator(name, score) {
  let new_user = Object.create(user_function_store);
  new_user.name = name;
  new_user.score = score;
  return new_user;
}

let user_function_store = {
  increament: () => {
    this.score++;
    console.log(this.score);
  },
};

let new_user1 = user_creator("will", 1);
let new_user2 = user_creator("smith", 9);
new_user1.increament(); // NaN in nodejs and window in browser;
