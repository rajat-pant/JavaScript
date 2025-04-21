let score="33"

console.log(typeof score);

let valueInNumber = Number(score)//datatype converted into number
console.log(typeof valueInNumber)

//"33"-> 33
//"33abc"->NaN
//true->1; false->0
//undefined->NaN
//null->0

let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1->true; 0->false
//""->false
//"rajat"->true

let aNumber=33

let stringNumber=String(aNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

//-----------Operations------------

let value=3
let negValue=-value
//console.log(negValue);

let str1="hello"
let str2="rajat"
let str3=str1+str2

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32