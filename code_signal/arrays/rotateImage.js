/*  Question
Note: Try to solve this task in-place (with O(1) additional memory), 
since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. 
Rotate the image by 90 degrees (clockwise).

*/

/* 
given an matrix (arrays within an array)
return the same data structure
example => 

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
 
solution(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]

 */

function solution(matrix) {
  const n = matrix.length;
  const x = Math.floor(n / 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      // temp variable used for swapping
      k = matrix[i][j];
      matrix[i][j] = matrix[y - j][i];
      matrix[y - i][i] = matrix[y - i][y - j];
      matrix[y - i][y - j] = matrix[j][y - i];
      matrix[j][y - i] = k;
    }
  }

  return matrix;
}

// quicker solution using js methods
// solution = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())
