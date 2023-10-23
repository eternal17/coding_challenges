/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
 */

// param is 2 strings // return is a bool

// examples "car", "rac" => true // "hello", "holla" => false

// set up a map with key as each char in alpha, value 0

// loop any string length,
// if char is found in first string => += 1 to its char
// if found in the second string => -= 1 to its char

// loop map, if any values are not 0, return false

// return true

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let alphaObj = {};

  for (let i = 97; i <= 122; i++) {
    alphaObj[String.fromCharCode(i)] = 0;
  }

  for (let i = 0; i < s.length; i++) {
    alphaObj[s[i]] += 1;
    alphaObj[t[i]] -= 1;
  }

  for (let char in alphaObj) {
    if (alphaObj[char] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram('hello', 'hella'));
