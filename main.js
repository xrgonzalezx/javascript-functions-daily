// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.
// let a = 5
// let b = 6

function max(a,b){
  if (a > b) {
    return a;
  } else if (b > a) {
    return b
  }
}
console.log(max(2,4));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

  function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) {
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(1,2,3));
  // Your answer here



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.



function isVowel(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  }
  else {
    return false
  }
}

console.log(isVowel("a"));
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(a,b){
  return (a + b);
}

console.log(sum(4,5));
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(a,b,c){
  return (a + b + c)/3;
}

console.log(avg(2,4,6));
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(x){
  return (x).length;
}

console.log(getLength("1,2,3,4,5,6"));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(a,b){
   if (a > b){
     return true;
   } else {
     return false;
   }
}

console.log(greaterThan(2,4));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
  return "Hello," + name;
}
console.log(greet("rudy"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
