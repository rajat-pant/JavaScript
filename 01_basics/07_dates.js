// date objects is start form since the midnight at the
// biginning of January 1, 1970,UTC 

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())
console.log(myDate.toJSON())

console.log(typeof myDate)//object

let myCreatedDate=new Date(2025,0,31)
console.log(myCreatedDate.toDateString())

let myCreatedDateTime=new Date(2025,0,23,5,10)
console.log(myCreatedDateTime.toLocaleString());

let myTimeStamp=Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"

})//speaciality of LocaleString
