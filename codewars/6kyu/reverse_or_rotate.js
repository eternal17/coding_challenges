/*
The input is a string str of digits. 
Cut the string into chunks (a chunk here is a substring of the initial string) of size sz 
(ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, 
reverse that chunk; otherwise rotate it to the left by one position. 
Put together these modified chunks and return the result as a string.


params: string, num
return: string
example

// cut the string into chunks of the given sz, possibly into an array

variable for sumOfCubes

loop each number in array
    loop each digit
        add the cube of the dig to sum

    if sum % 2 ===0 
        reverse number
    else 
        rotate number by one position
    
    return array.join
*/

function revrot(str, sz) {
  if (sz <= 0 || str === '' || sz > str.length) {
    return '';
  }

  //   regex for every sz chars
  let regexChunks = new RegExp(`.{${sz}}`, 'g');
  //   match splits the string based on the regex. filter to return only the strings with the length of sz
  let chunksArr = str.match(regexChunks).filter((x) => x.length === sz);

  let retStr = '';

  //   loop each number from array
  chunksArr.forEach((num, i) => {
    let cubedSum = 0;
    // loop each digit in num
    for (let i = 0; i < num.length; i++) {
      // add num to cubedSum
      cubedSum += Math.pow(num[i], 3);
    }

    const numStr = chunksArr[i].toString();

    if (cubedSum % 2 === 0) {
      retStr += numStr.split('').reverse().join('');
    } else {
      retStr += numStr.slice(1) + numStr.charAt(0);
    }
  });

  return retStr;
}

console.log(revrot('123456987654', 6));
