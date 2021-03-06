///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

console.log('=== Excercise 1 ===');

// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var sum = function(num1, num2) {
  return num1+num2;
};
console.assert(sum(1,2) === 3, 'sum expected: 3');
console.assert(sum(1,4) === 3, 'sum expected: 5');


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
var avg = function(num1, num2, num3) {
  avgSum = num1 + num2 + num3;
  return avgSum/3;
};

console.assert(avg(2,4,0) === 2, 'avg expected: 2');
console.assert(avg(2,4,0) === 4, 'avg expected: 3');


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
var getLength = function(str) {
  return str.length;
};

console.assert(getLength('test') === 4, 'getLength expected: 4');
console.assert(getLength(['test']) === 4, 'getLength expected: a String');


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
var greaterThan = function(num1, num2) {
  if (num2 > num1) {
    return true;
  } else {
    return false;
  }
};
console.assert(greaterThan(1,2) === true, 'getLength expected: 4');
console.assert(greaterThan('blah', 2) === true, '2 is not greater than Blah');

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
var greet = function(name) {
  return 'Hello, ' + name + '!';
};
console.assert(greet('Jess') === 'Hello, Jess!');
console.assert(greet([]) === 'Hello, Array!', 'greet: Expecting a String');



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
var madLib = function(word1, word2, word3, word4) {
  return "quick " + word1 + ' ' + word2 + ' ' + word3 + ' over the ' + word4;
};
console.assert(madLib('brown', 'fox', 'jumps', 'fence') === 'quick brown fox jumps over the fence');
console.assert(madLib('brown', 'fox', 'jumps', 'black', 'fence') === 'quick black fox jumps over the brown fox', 'madLib: failed');

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
