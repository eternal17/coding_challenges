/* In this kata you will create a function that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.*/

function filterList(arr) {
  return arr.filter((el) => !(typeof el === 'string'));
}

console.log(filterList([1, 2, 'a', 'b']), [1, 2]);
