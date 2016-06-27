// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


console.log('\n\n\n\n\n');
console.log('=== ARRAYS ===');
// ---------------------------
// 1. Find largest number
// ---------------------------
console.log('Max of array: ', Math.max.apply(null, numbers));


// ---------------------------
// 2. Find longest string
// ---------------------------
var longest = '';
for (let str of strings) {
  console.log(str.length);
  if (str.length > longest.length) {
    longest = str;
  }
}
console.log('longest word: ' + longest);



// ---------------------------
// 3. Find even numbers
// ---------------------------
var evenNumbers = [];
var oddNumbers = [];
for (let num of numbers) {
  if (num%2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
}
console.log('Even numbers: ', evenNumbers);


// ---------------------------
// 4. Find odd numbers
// ---------------------------
console.log('Even numbers: ', oddNumbers);

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var containsIs = [];
for (let str of strings) {
  if (str.indexOf('is') >= 0) {
    containsIs.push(str);
  }
}
console.log('Words that contain is: ', containsIs);


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
console.log('joined arrays: ', numbers.concat(strings));



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
var JSTeachers = [];
for (let teacher of instructors) {
  if (teacher.teaches === 'JavaScript') {
    JSTeachers.push(teacher.firstname);
  }
}
console.log('Javascript teachers alphabetically: ', JSTeachers.sort());
