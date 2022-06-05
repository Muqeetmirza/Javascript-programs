/*The padStart() method is a string method.
To pad a number, convert the number to a string first.
See the example below.
*/
let text2 = "5";
let padded = text2.padStart(4,"0");
console.log(padded)
//output:0005

/*The padEnd() method is a string method.
To pad a number, convert the number to a string first.
See the example below.*/
let numb = 5;
let text3 = numb.toString();
let padded2 = text3.padEnd(4,"0");
console.log(padded2)
//output:5000