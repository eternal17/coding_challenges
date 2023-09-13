/*
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.
*/

// Parameter: string, return is a number

// example: "abcde" -> 0 # no characters repeats more than once
//aabbcde" -> 2 # 'a' and 'b'

// add each char in the string to an Object, if the value in the object is ever 2,
// that means that it is a duplicate and we add to the count.

function duplicateCount(text) {
  let count = 0;

  let textArr = text.toLowerCase().split('');

  let chObj = {};

  textArr.forEach((ch) => {
    chObj[ch] = (chObj[ch] || 0) + 1;

    if (chObj[ch] === 2) {
      count++;
    }
  });

  return count;
}

console.log(duplicateCount('aabBcde'));
