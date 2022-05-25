const obj={
    "name":"Ali",
    "age":10,
    "email":"abc@gmail.com",
    "address":"gujrat",
    avg : function(){
        //pass a function for avg
        let mark=45+50+23+54+54+54;
        let average=mark/6;
        return average;
        //after return the value is in avg
    }
};
console.log(obj.avg());