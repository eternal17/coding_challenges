/*
integer with a boolean as a return


if there are an even number of digits,
    double every digit starting from first
    if digit is greater than 9
        18 - digit

sum all final digits
    if sum % 10 === 0
      return  true
    else 
     return   false
*/

function validate(n) {
  let start;

  let strNumArr = n.toString().split('');

  let numArr = strNumArr.map((num) => {
    return parseInt(num);
  });

  numArr.length % 2 === 0 ? (start = 0) : (start = 1);

  for (let i = start; i < numArr.length - 1; i = i + 2) {
    if (numArr[i] * 2 > 9) {
      numArr[i] = 18 - numArr[i];
    } else {
      numArr[i] *= 2;
    }
  }

  const sum = numArr.reduce((a, b) => a + b, 0);

  return sum % 10 === 0 ? true : false;
}

console.log(validate(2121));
