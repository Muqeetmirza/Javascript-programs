//The replace() method replaces a specified value with another value in a string:

/*The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
If you want to replace all matches, use a regular expression with the /g flag set. See examples below.*/
let text="Hello, my name is Muqeet"
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let change=text.replace(/abdul/i,"muqeet")
console.log(text)
console.log(change)


//A string is converted to upper case with toUpperCase():

//A string is converted to lower case with toLowerCase():
let text1 ="muqeet";
let uppercase=text1.toUpperCase;
console.log(uppercase);