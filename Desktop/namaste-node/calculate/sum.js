//Modules protects variables n functions from leaking

console.log("sum module executed")
 var x="Hello World"
// export var x="Hello World"
//  export function caluculateSum(a,b){

//   const   sum = a + b
//  console.log(sum)
// }
 function caluculateSum(a,b){

  const   sum = a + b
 console.log(sum)
}

// module.exports ={
//     x:x,
//     caluculateSum:caluculateSum
// }

// module.exports = {x,caluculateSum}