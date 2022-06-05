/*The toString() Method
The toString() method returns a number as a string.
All number methods can be used on any type of numbers (literals, variables, or expressions): */
let x=321;
let out=x.toString();
//we can also use these two methods
//(123).toString();
//(100 + 23).toString();
console.log(out);


/*The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.
A parameter defines the number of characters behind the decimal point:
 */
let a = 9.656;
let b=a.toExponential(2);
let c=a.toExponential(4);
let d=a.toExponential(6);
console.log(b);
console.log(c);
console.log(d);


/*The toFixed() Method
toFixed() returns a string, with the number written with a specified number of decimals:
 */
let m = 9.656;
let n=x.toFixed(0);
let o=x.toFixed(2);
let p=x.toFixed(4);
let q=x.toFixed(6);
console.log(n);
console.log(o);
console.log(p);
console.log(q);
//uses to fix the digits of given values length so the garbage calue can't interfare
//toFixed(2) is perfect for working with money.