// require("./xyz.js") //one module to another
// const obj =require("./sum.js") //importing one methode or variables into another module
// const {x,caluculateSum}=require("./sum")
// import {x,caluculateSum} from "./sum.js"
require("./sum.js")


const {sum,Multiply}= require('./calculate')
const data =require("./data.json")

console.log(data)
var a="arshiya tabassum"
//  z="useStrict mode example"
var a=10
var b=20
// console.log(a)
// console.log(global)
// console.log(this)//{}
// console.log(globalThis === global)//true

// console.log(obj.x)
// obj.caluculateSum(a,b)
// console.log(x)
// caluculateSum(a,b)