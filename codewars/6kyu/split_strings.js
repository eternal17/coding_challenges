/* Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should 
replace the missing second character of the final pair with an underscore ('_'). */

/*
param: str
return: array
example: 'abc' =>  ['ab', 'c_'] // * 'abcdef' => ['ab', 'cd', 'ef']

if string is even
    split by 2 characters
else
    add _ to string
    split by 2 characters
    
return the string
*/

function solution(str) {
  if (str.length === 0) return [];

  return str.length % 2 === 0 ? str.match(/.{2}/g) : (str + '_').match(/.{2}/g);
}

console.log(solution('hello'));
