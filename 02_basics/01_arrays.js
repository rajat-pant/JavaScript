//array

const myArr=[0,1,2,3,4,5]
const Heroes=["Iron Man",["thor"]]

const myArr2=new Array(1,2,3,4)

console.log(myArr[3]); //3

// Array Methods

myArr.push(6)//[0,1,2,3,4,5,6]
myArr.pop() //[0,1,2,3,4,5]

myArr.unshift(0)//[0,0,1,2,3,4,5]
myArr.shift()//[1,2,3,4,5]

console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1

const newArr=myArr.join()//0,1,2,3,4,5

console.log(typeof newArr);//string

// slice, splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2)
// A [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B [ 0, 1, 2, 3, 4, 5 ]
// C [ 0, 4, 5 ]
// [ 1, 2, 3 ]