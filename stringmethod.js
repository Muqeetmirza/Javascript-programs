/*There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
replace method*/


//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: the start position, and the end position (end not included).
let st="apple,bnana,orange"
let part=st.slice(6,11);
console.log(part);
//in above it shows string in length between 6 to 11

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
let pt = str.substring(7,13);//If you omit the second parameter, substring() will slice out the rest of the string.

console.log(pt)
