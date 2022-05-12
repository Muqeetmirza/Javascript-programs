//we cannot redeclare value in let
let x=10,y=15,z;
z=x*y;
console.log(z)
/* it show error if we redeclare x y again in let
let x=5;
let y=3;
z=x*y;
*/
console.log(z)