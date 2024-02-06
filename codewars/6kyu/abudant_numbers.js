/*
In number theory, an abundant number or an excessive number is 
one for which the sum of it's proper divisors is greater than the number itself. 
The integer 12 is the first abundant number. 
Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16. 
The amount by which the sum exceeds the number is the abundance. 
The number 12 has an abundance of 4, for example.
*/

// given an positive integer, return an array of arrays

// example => 15 => => [[12], [4]]. 12 is the abundant number,
// 4 is the difference between the sum of divisors - abundant number

// we know 12 is the first abundant number. if the argument is <12 return an empty array

// loop from 12, to number.
// check the divisors for each num
// if addition is greater than given num return num and difference between added up
// divisors - num

function abundant(n) {
  let divideNum = 1;
  for (let i = n; i >= 12; i--) {
    let divideSum = 0;
    while (divideSum <= n) {
      if (n % divideNum === 0) {
        console.log(divideNum);
        divideSum += divideNum;
      }
      divideNum++;
    }
    console.log('checking divide sum', divideSum);
  }
}

console.log(abundant(15));
