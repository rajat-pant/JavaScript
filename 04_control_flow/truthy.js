const userEmail= "rajat@gmail.com"

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
}


//falsy values :-

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//rest are truthy
//special cases:
//"0", 'false', " ", [], {}, function(){}

if(userEmail.length ===0){
    console.log("Array is empty")
}

const emptyObj={}

if(Object.keys(emptyObj).length ===0){
    console.log("object is empty");
}

//Nullish Coalescing Operator(??): null undefined

let val1;
//val1=5 ?? 10 //10
//val1=null??10 //10
//val1=undefined??15 //15
//val1=null ?? 10 ?? 20

console.log(val1);

// terniary operator

//consiton ? true : false

const coldCoffeePrice=100

coldCoffeePrice <=80 ?console.log("less than 80") : console.log("more than 80")
