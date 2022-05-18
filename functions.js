let x=myfunction(4,7)//function is called here
// console.log(x);

//it add into function body and after the operation it return value into x
//two local variable are used to pass parameter
//and then return the value to x
function myfunction(a,b){
  return  a*b;
}

//student record in function

// console.log("Student record is/n")
// let student=("a,b,c")
// function student(m,n,o){
//     let name="muqeet"=m;
//     let age="21"=n;
//     let degree="BSIT"=o;
//     return m,n,o;
// }

// console.log(student);
function add(a,x,o){
    var f=a+x;
    console.log(o);
    console.log(f);
}
add(1,3,'heloo')
add()
// console.log(c);