const user={
    username:"rajat",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);//here this refers current contest
        //console.log(this)
    }
}

user.welcomeMessage()

user.username= "sam"
user.welcomeMessage()

//console.log(this);//output={}

// function song(){
//    let username="rajat"
//    console.log(this.username);
// }
// song() 

const chai= () =>{
    let username="rajat"
    console.log(this.username);
}

//chai()
//method1- explicit return
//const addTwo =(num1,num2) => {
//    return num1+num2
//}

// implicit return
// const addTwo = (num1,num2) =>( num1+num2)

const addTwo = (num1,num2) =>( {username:"rajat"})
console.log(addTwo(4,3))