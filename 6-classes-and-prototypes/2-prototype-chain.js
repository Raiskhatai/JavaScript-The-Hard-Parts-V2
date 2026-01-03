// JavaScript me jab kisi object me property/method nahi milta,
// to JS uske prototype me dhundta hai → phir prototype ke prototype me…
// ye process chalta rehta hai jab tak null na mil jaye.

// Isi lookup process ko Prototype Chain kehte hain.
// Har object ke paas ek hidden link hota hai → [[Prototype]] (ya __proto__).

function user_creator(name, score) {
  let new_user = Object.create(user_function_store);
  new_user.name = name;
  new_user.score = score;
  return new_user;
}

const user_function_store = {
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
new_user1.increament(); // 2
new_user2.increament(); // 10
new_user1.increament(); // 3

// Object.create() yeh emply object banata hey or iske parameter mey prototype(parent) kya rahega wah dena hota hey.
// factory function yeh har baar same kaam kar rha sirf name and score change hey but function repeat ho rhey jisse memory har function ke liye banani iska solution hey prototype chain.

// function user_creator(name, score) {
//   let new_user = Object.create(null);
//   new_user.name = name;
//   new_user.score = score;
//   new_user.increament = function () {
//     new_user.score++;
//     console.log(new_user.score);
//   };
//   return new_user;
// }

// const new_user1 = user_creator("will", 3);
// const new_user2 = user_creator("saim", 7);
// console.log(new_user1.increament());    // 4
// console.log(new_user2.increament());    // 8
