// Generalized function woh function hota hai jo hard-coded values(like numbers:51) par depend nahi karta, balki parameters (inputs) leta hai aur reuse ho sakta hai
//  kyun use karte hain ? : Code repeat nahi hota , Logic ek jagah fix , Code clean & readable

function ten_squared() {
  return 10 * 10;
}
console.log(ten_squared());

function nine_squared() {
  return 9 * 9;
}
console.log(nine_squared());

// ek he kaam ke liye code baar baar repeat ho rha yeh DRY(don't repeat your self ) principle break karta hey.
// is liye hum generalized function use karte hey.

// generalized function reusable hota hey.
// more clean.
function squared(val) {
  return val * val;
}

let eight_squared = squared(8);
console.log(eight_squared);
let seven_squared = squared(7);
console.log(seven_squared);
