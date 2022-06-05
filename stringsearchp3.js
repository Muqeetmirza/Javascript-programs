//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
let text = "The rain in SPAIN stays mainly in the plain";
 let op=text.match("ain");
console.log(op); 
//The includes() method returns true if a string contains a specified value.
let text2="Hello world, welcome to the universe.";
//text2.includes("wolrd")
let show=text2.includes("world");
console.log(show);
/*string.includes(searchvalue, start)
searchvalue	Required. The string to search for
start	Optional. Default 0. Position to start the search
Returns:	Returns true if the string contains the value, otherwise false
JS Version:	ES6 (2015) */
//it simply show true or falls if the condition is available or not
let sho=text2.includes("world",12);
console.log(sho);


//The startsWith() method returns true if a string begins with a specified value, otherwise false:
let text3 = "Hello world, welcome to the universe.";

let sh=text3.startsWith("Hello");
console.log(sh);
//string.startsWith(searchvalue, start)
//searchvalue	Required. The value to search for.
//start	Optional. Default 0. The position to start the search.
let text4 = "Hello world, welcome to the universe.";

let s=text.startsWith("world", 6)
    // Returns true
    console.log(s);