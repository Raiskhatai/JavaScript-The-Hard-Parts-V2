let val = fetch("https://api.thecatapi.com/v1/images/search?limit=10");
// our domain name starts here, the path(/useers)
let ext = val
  .then((data) => data.json())    // chal gaya to 
  .catch(() => {
    console.log("error hey bhai chal nhi rha bhai");
  }); // nhi chala to
ext.then((value) => console.log(value));

// summary : fetch() do kaam karta hey 1. promise object dena jisme value and fullfilled hey ={value,fullfiled=[]} 2. browser network request feer data aane par wah data promise ki value mey jata hey. fullfiled mey .then ke andar ka callback function fullfiled ke array mey chala jata hey or us callback function mey value aa jati hey .
// or jab value aa jati to callback function microtask queue mey jata hey or wah queue event loop mey chalta hey jo check karta hey call stack khali ho gaya kya khali hone par callback function callstack mey aata hey feer chal jata hey.

// Let's Dig into it, the fetch will be divide in 2 parts the first part will be web browser and second part will be our response promise(object) the fetch method request to browser for data the browser will request to network then network will be first go to the domain name after will go to the given path and find ur data and return it to browser and browser will return it to javaScript;
// whatever thing works asynchronously that's the promise;

// fetch() turant Promise (pending) return karta hai
// Browser network request start karta hai (DNS → HTTP)
// JavaScript block nahi hota, call stack free rehta hai
// Server se response aata hai
// Browser Promise ko resolve / reject karta hai
// Callback Microtask Queue me jata hai
// Call stack empty hote hi then / await execute hota hai

//  JSON = JavaScript Object Notation
// Data ko text (string) format me convert karta hai
// Jo har language samajh leti hai
// Network par safely travel karta hai
