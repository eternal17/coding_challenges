/*It's the academic year's end, fateful moment of your school report. 
The averages must be calculated. All the students come to you and 
entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */

const getAverage = (arr) =>
  Math.floor(arr.reduce((a, c) => a + c) / arr.length);

console.log(getAverage([1, 2, 3, 2, 8]));
