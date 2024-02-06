// array of integers
// return an array of integers
// even ex: [79, 35, 54, 19, 35, 25] => [79, 35, 25, *19*, 35, 54]
// odd ex: [67, 93, 100, -16, 65, 97, 92] => [100, 93, 67, *-16*, 65, 92, 97]

// find lowest number

function makeValley(arr) {
  // Your code
  const leftWing = [];
  const rightWing = [];

  arr
    .sort((a, b) => b - a)
    .forEach((el, i) =>
      i % 2 === 0 ? leftWing.push(el) : rightWing.unshift(el)
    );

  return [...leftWing, ...rightWing];
}
