//Both methods accept a second parameter as the starting position for the search:
//indexof and lastindexof
let str = "Please locate where 'locate' occurs!";

let index=str.indexOf("locate", 15);
console.log(index)
//as we know indexof see only first string but here we pass a parameter of condition
//thats why it starts its search from 15th index and move forward



//The search() method searches a string for a specified value and returns the position of the match:
let strr="Please locate where 'locate' occurs!";
let ind=strr.search("locate");
console.log(ind);
/*The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions). */


