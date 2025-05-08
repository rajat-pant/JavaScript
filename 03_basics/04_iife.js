// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log('DB connected');
})();

//()()
//problem created by global scope pollution , so for removing global scope
//pollution we have to use iife

( (name) =>{
    //unamed iife
    console.log(`DB TWO CONNECTED ${name}`);
})('rajat');