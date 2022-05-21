//This code assigns many values (Fiat, 500, white) to a variable named car

//use variablename.propertyname to get value
const car={firstname:"Mirza",
lastname:"Muqeet",
color:"black",
type:"fiat",
model:"BMW"
, //now we use object properties in function
fullname: function(){
    return car.firstname+ car.lastname;
} };

console.log(car.color);

console.log(car.type);

console.log(car.model);
console.log(car.fullname)


