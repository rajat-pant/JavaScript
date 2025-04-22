//Primitive datatype

//7 types: String, Number, Boolean, null,undefined,symbol,BigInt


/*JavaScript is a dynamic language, which means that variables
can hold values of different types during runtime. Unlike typescript 
you don't need to declare the datat type of a variable explicitly.

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);//false

const bigNumber=341972792n //bigint

*/

//Reference (Non Primitive)

//Array, Objects, Functions

const heros=["rajat","pant","ram"];//array

let myObj={
    name:"rajat",
    age:"22",
}//object

const myFunc=function (){
        console.log("Hello World");
}

/* ********************************************* */
//stcak(primitive),heap(non-primitive)

let myYoutubename="rajatpant"

let anothername="rajat"

console.log(myYoutubename)
console.log(anothername)

let userOne={
    email:"rajatpant@gmail.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email="rajat@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);