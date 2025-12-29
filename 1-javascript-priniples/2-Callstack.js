// Call Stack = JavaScript ka execution tracker.
// Yeh yaad rakhta hai kaunsa function chal raha hai,
// aur next kaunsa run hoga.
// call stack ke nichey hota hey global.

// Rule : Stack follows LIFO Last In, First Out Jo function last me gaya, sabse pehle bahar aayega.

// ex 1 :-
// global storage mey function greet bana feer greet() call stack mey gaya or kaam khatam hote he destory ho gaya. or stack se pop.

// function greet() {
//   console.log("hello");
// }
// greet();

// ex 2 :-
// global storage mey function one bana feer two feer three.
// stack mey :- sabse pahle three call hua wo wah sabse pahle stack mey gaya feer two() feer one() .
// lekin sabse pahle pop hua one() or last mey hua three ();  

function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

function three() {
  two();
  console.log("three");
}

three();
