console.log("The output is comes through parameter");

let x=fun(32,76)
// Function is called, return value will end up in x
fun();
console.log(x);
function fun(a,b){
    
    a+=b;
    return a;
    // Function returns the product of a
}