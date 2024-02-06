/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

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

const groupAnagrams = (arr) => {
  let anagramMap = new Map();

  arr.forEach((str) => {
    const strSorted = str.split('').sort().join('');

    if (anagramMap.has(strSorted)) {
      anagramMap.set(strSorted, [str, ...anagramMap.get(strSorted)]);
    } else {
      anagramMap.set(strSorted, [str]);
    }
  });

  return Array.from(anagramMap.values());
};

// check within an array of arrays whether a string exists

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
