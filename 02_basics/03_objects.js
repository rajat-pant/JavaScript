//singleton
//object.create

//object literals

const mySym=Symbol("key1")
const JsUser={
    name:"rajat",
    [mySym]:"mykey1",
    age:22,
    location:"Dehradun",
    email:"rajat@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(typeof JsUser[mySym])

JsUser.email="rajat12@gmail.com"
//Object.freeze(JsUser)
JsUser.email="rajatt@gmail.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

