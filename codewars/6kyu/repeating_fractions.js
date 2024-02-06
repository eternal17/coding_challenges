/* that given two numbers representing the numerator and denominator of a fraction, 
return the fraction in string format. If the fractional part has repeated digits, 
replace those digits with a single digit in parentheses. */

// parameters => 2 numbers
// return is a string
// example: (2, 888) => '0.(0)(2)5(2)5(2)5(2)5(2)5(2)'

/* First we can check that if both numbers are same return '1'
   
Then we divide the number
convert to a string
create a variable for everything after the .
loop through that variable, 
    have a placeholder for a number
    if next number is same
        remove it 
        add () around current number

concat new variable to anything before the dot. 


*/

function repeatingFractions(numerator, denominator) {
  if (numerator === denominator) {
    return '1';
  }

  let divisionSumStr = (numerator / denominator).toString();

  let numDenomStrArray = divisionSumStr.split('.');

  let denomStr = numDenomStrArray[1];

  let nextChar = '';

  let bracketString = '';
  for (let i = 0; i < denomStr.length; i++) {
    if (denomStr[i] === denomStr[i + 1]) {
      console.log('sorry');
      denomStr = denomStr.replace(denomStr[i], `(${denomStr[i]})`);
      denomStr = denomStr.replace(denomStr[i + 1], '');
    }
  }

  return bracketString;
}

console.log(repeatingFractions(2, 888));
