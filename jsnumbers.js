//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
/*let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000 */


/*Adding Numbers and Strings
WARNING !!
JavaScript uses the + operator for both addition and concatenation.
Numbers are added. Strings are concatenated. */

//If you add a string and a number, the result will be a string concatenation:
let x = "10";
let y = 20;
let z = x + y;
console.log(z);
//output 1020


//let x = 100;         // x is a number
//let y = "100";       // y is a string


//JavaScript will try to convert strings to numbers in all numeric operations:
//This will work:
let a = "100";
let b = "10";
let c = a / b;
console.log(c);
//devision multiply,substraction the same way
//only + make all the values into strings


/*NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

 */
//Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

/*let x = NaN;
let y = 5;
let z = x + y;
output: NaN */
