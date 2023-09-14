/*
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
*/

/*

param => arr
return => number
example: [12, 10, 8, 12, 7, 6, 4, 10, 12] -->  12

create a map

loop arr
    add each number as key
    add the occurance as value starting from 1


check map, push values of highest occurance pair into an array
return largest key number
*/

function highestRank(arr) {
  let occuranceMap = new Map();

  arr.forEach((num) => {
    // if the key undefined set it to zero otherwise + 1 to value
    occuranceMap.set(num, (occuranceMap.get(num) || 0) + 1);
  });

  let maxVal = 0;
  //   get the max value from map
  for (let [key, val] of occuranceMap) {
    console.log(key, val);
    if (val > maxVal) {
      maxVal = val;
    }
  }

  //   loop map again and find push keys that correspond to maxval in a map
  let finalArr = [];
  for ([key, val] of occuranceMap) {
    if (val === maxVal) {
      finalArr.push(key);
    }
  }

  return Math.max(...finalArr);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
