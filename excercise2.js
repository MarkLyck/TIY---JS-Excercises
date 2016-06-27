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

console.log('MAX 4,3: ' + max(4,3));

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

console.log('MAX of 4,3,8: ' + max(4,3,8));

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

console.log('isVowel a: ' + max('a'));
console.log('isVowel b: ' + max('b'));

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    var newString = '';
    for (var i = 0, len = phrase.length; i < len; i++) {
      console.log(phrase.split('')[i]);
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

console.log('rovarspraket this is fun: ' + rovarspraket('this is fun'));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    var newString = '';
    for (var i = phrase.length-1, len = phrase.length; i >= 0; i--) {
      var char = phrase.split('')[i];
      newString += char;
    }
    return newString;
}

console.log('reverse: jag testar: ' + reverse('jag testar'));
