function repeats(arr) {
  return arr
    .filter((n) => arr.indexOf(n) === arr.lastIndexOf(n))
    .reduce((a, c) => a + c, 0);
}

console.log(repeats([1, 2, 2, 4, 3, 3]) + ' is expected to be 5');
