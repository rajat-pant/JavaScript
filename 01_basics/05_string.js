const name="rajat"
const repoCount=10

//console.log(name +repoCount+"Value");

console.log(` Hello my name is ${name} and my repo count is
    ${repoCount}`);

const gameName=new String('clashofclans')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('o'))

const newString=gameName.substring(0,5)
console.log(newString)

const anotherString=gameName.slice(-7,8)
console.log(anotherString)

const newStringOne=" rajat  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://rajat.com/rajat77pant"

console.log(url.replace('77','-'))
console.log(url.includes('rajat'))

console.log(gameName.split('a'))//[ 'cl', 'shofcl', 'ns' ]