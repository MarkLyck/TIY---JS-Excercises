console.log('\n\n\n\n\n');
console.log('=== Excercise 2 ===');

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1,num2){
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
}
console.assert(max(1,3) === 3, 'max expected: 3');
console.assert(max(1,4) === 3, 'max expected: 4');

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1,num2,num3){
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3){
    return num2;
  } else {
    return num3;
  }
}

console.assert(maxOfThree(1,3,4) === 4, 'max expected: 4');
console.assert(maxOfThree(1,4,6) === 5, 'max expected: 6');

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'y') {
      return true;
    } else {
      return false;
    }
}

console.assert(isVowel('a') === true, 'isVowel expected: true');
console.assert(isVowel('b') === true, 'isVowel expected: false');

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    var newString = '';
    for (var i = 0, len = phrase.length; i < len; i++) {
      var char = phrase.split('')[i];
      if (!isVowel(char)) {
        newString += char + 'o' + char;
      } else {
        newString += char;
      }
    }
    newString.replace(' ', ' o ');
    return newString;
}

console.assert(rovarspraket('this is fun') === 'tothohisos isos fofunon', 'rovarspraket broken');
console.assert(rovarspraket('assertions are fun') === 'tothohisos isos fofunon', 'rovarspraket expected different result');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
  return phrase.split('').reverse().join('');
}

console.assert(reverse('jag testar') === 'ratset gaj', 'reverse expected: ratset gaj');
console.assert(reverse('jeg testar') === 'ratset gaj', 'reverse expected: ratset gej');
