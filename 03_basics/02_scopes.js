let a=100 //global scope

if(true){
    let a=10 //block scope
    const b=20
    console.log("Inner:",a);
}

console.log(a);

function one(){
    const username="rajat"

    function two(){
    const website="youtube"
    console.log(username)
    }
    //console.log(website)
    //two()

}
//one()

if(true){
    const username="rajat"
    if(username === "rajat"){
        const website=" youtube"
        console.log(username+website)
    }
    //console.log(website)
}

//console.log(username);
// ************* Interesting ************

function addone(num){
    return num+1
}

addone(5)

//expression 
const addTwo=function(num){
    return num+2
}

addTwo(5)