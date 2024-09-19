// global object
// console.log(global)

global.setTimeout(()=>{
        console.log("this is setTimeout")
        clearInterval(int)
},3000)

const int = setInterval(()=>{
    console.log("this is set Interval")
},1000)

console.log(__dirname)
console.log(__filename)
