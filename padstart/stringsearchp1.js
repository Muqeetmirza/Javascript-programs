/*String indexOf()
String lastIndexOf()
String startsWith()
String endsWith()*/

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
let str ="Please locate where 'locate' occurs!";
let index=str.indexOf("locate");
console.log(index);
//it show the index num of firt string which we mention and used many times
/*JavaScript counts positions from zero.
0 is the first position in a string, 1 is the second, 2 is the third*/



//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
let strr="Please locate where 'locate' occurs!";
let lastindex=strr.lastIndexOf("m");
console.log(lastindex);
//it shows the index of last string
//Both indexOf(), and lastIndexOf() return -1 if the text is not found: