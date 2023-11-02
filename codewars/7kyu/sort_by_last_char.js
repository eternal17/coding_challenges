/*

Given a string of words (x), you need to return an array of the words, 
sorted alphabetically by the final character in each.

If two words have the same last letter, 
they returned array should show them in the order they appeared in the given string.

All inputs will be valid. */

// parameter => string
// return => array of strings
// example "Hello there whats up" => [there, hello, up, whats]
// psuedo

// split the string
// use the sort method to sort based off the last char

function last(x) {
  return x
    .split(' ')
    .sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
}
