/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/

// params => []int, int
// return => []int

// add ints to a map of key: number, val: number of occurances
// need to figure how to return most occured k times
// loop map, add check if highest key is added

const topKFrequent = (nums, k) => {
  let occurObj = {};
  for (let num of nums) {
    occurObj[num] = (occurObj[num] || 0) + 1;
  }
  // convert obj to an array key value pairing arrays.
  const sorted = Object.entries(occurObj).sort((a, b) => b[1] - a[1]);
  let returnArr = [];
  for (let i = 0; i < k; i++) {
    returnArr.push(parseInt(sorted[i][0]));
  }

  return returnArr;
};

console.log(topKFrequent([-1, -1], 1));
