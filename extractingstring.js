/*There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]
*/


/*The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).*/
let text="Hello word";
let char=text.charCodeAt(0);
console.log(char)
//ouput: 72

let text1="hello word";
let char2=text1[2]
console.log(char2)
//output: l