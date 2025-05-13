//for eaach loop
const coding=["js", "cpp", "java", "py"]

// coding.forEach(function (item) {
//     console.log(val)
// })

// coding.forEach( (item) =>{
//     cosnole.log(item);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

const myCoding=[
    {
        languageName:"C++",
        languageFileName:"cpp"
    },

    {
        languageName:"Javascript",
        languageFileName:"js"
    },

    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})