//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates
/*Synonyms:

Template Literals
Template Strings
String Templates
Back-Tics Syntax */
//Template Literals use back-ticks (``) rather than the quotes ("") to define a string


let text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);
//Template literals allows multiline strings:


//Template literals provide an easy way to interpolate variables and expressions into strings.
//we can easily access variables in strings through it
//syntex   ::::  ${...}
let fname="Abdul ";
let lname="Muqeet";
let t2=`First name is ${fname} and ${lname}`;
console.log(t2);

//Template literals allow expressions in strings:

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
//Automatic replacing of expressions with real values is called string interpolation.