// A class in JavaScript is a blueprint for creating objects, encapsulating data (properties) and behavior (methods)

class user_creator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increament() {
    this.score++;
    console.log(this.score);
  }
  login() {
    console.log("score");
  }
}

const user1 = new user_creator("Eva", 9);
user1.increament(); // 10;
