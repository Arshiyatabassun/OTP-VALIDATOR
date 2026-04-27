// /How the functions work in the variable environment
// var x = 1
// a()
// b()
// console.log(x)

// function a() {
//   var x = 10
//   console.log(x)
// }

// function b() {
//   var x = 100
//   console.log(x)
// }

//window or this

// var a = 10 //global space

// function b() {
//   var x = 10
// }
// console.log(window.a)
// console.log(this.a)
// console.log(a);//all are same

// undefined and not defined
// undefined:
// ex1:
// console.log(a) //undefined
// var a = 10 //even bfr the code is executed js try to llocate memory to a i-e->undefine
// // console.log(x) // error:not defined we are not allocate memory to x bcz x is not defined only
//not define means memory is not allocated for the variable
// if (a === undefined) {
//   console.log('a is undefined')
// } else {
//   console.log('a is not defined')
// }

// js is loosy typed language or weak typed lang means it doesnot attaches its variables to specifc data type
// ex: var b
// console.log(b) //undefined

// b = 10
// console.log(b) //10

// b = 'arshi'
// console.log(b) //arshi

// Scope and SCOPE CHAIN
// when we invoke a function execution context is created
// * whenever execution context is created an lexical environemnt is also created.
//* lexical environemnt means hireachy or in order--local memory + refrence of its lexical environment parent

// ex-1:
// function a() {
//   c()
//   function c() {
//     console.log(b)//10
//   }
// }
// var b = 10
// a()

// ex-2
// function a() {
//   var b = 10
//   c()
//   function c() {
//     console.log(b) //10
//   }
// }
// a()

// ex-3

// function a() {
//   c()
//   function c() {
//     // console.log(b) // b is not defined
//   }
// }
// a()

// function statement is also called as function declaration
// function a() {
//   console.log('a called') //a called
// }
// a()

// //function expression;
// // functions acts as a value
// var b = function () {
//   console.log('b called') //b called
// }
// b()

// // what is the diffrence btween function statement and function expression

// 1.the major diffrence is hoisting
// a()
// b()
// function a() {
//   console.log('a called') //a called
// }
// var b = function () {
//   //this variable b is treated as any other variable
//   console.log('b called') //Type error: b is not a function
// }

// Anonymous functions--is used a value

// function (){

// }//will get an err tht-->SyntaxError: Function statements require a function name

//imprtant===> var b = function xyz() {
//   // this is an Named function
//   console.log('b called')
// }
// b()
// xyz()//ReferenceError: xyz is not defined

// Named function expression:
// function a() {
//   console.log('a called') //a called
// }
// var b = function xyz() {
// console.log('b called') //b called
//   console.log(xyz) // [Function: xyz]
// }
// a()
// b()
// xyz() // it is not created in the outer scope it is treated as a local variable if we access out of the function it will give an error i-e->ReferenceError: xyz is not defined

// diffrence b/w Parameter & Argument

// function xyz(param1, param2)
// function xyz(a, b) {// here a n b are parameter
//   console.log(a, b)//1 2
// }
// xyz(1, 2) //1 and 2 are arguments i-e the value which we pass inside the function are known as arguments

// FIRST CLASS FUNCTIONS: or First class citizens-ability to used as values- functions are first class objects. First-class functions
// means when functions in that language are treated like any other variable.
// , a function can be passed as an argument to other functions,
// can be returned by another function and can be assigned as a value to a variable
//  ex-1 :
//  var b = function (param1) {
//   console.log(param1)
// }
// // b(function () {})

// ex-2 passing another fucntion inside another function
// var b = function (param1) {
//   console.log(param1)
// }
// function xyz() {}
// b(xyz)

// ex-3: we can return a function from a function

//  1.
// var b = function (param1) {
//   return function () {}
// }
// console.log(b()) //[Function (anonymous)]

//  2.
// var b = function (param1) {
//   return function xyz() {}
// }
// console.log(b()) //[Function: xyz]

//Higher Order function:
// Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

// const radius = [3, 2, 1]

// const area = function (radius) {
//   return Math.PI * radius * radius
// }

// Array.prototype.calculate = function (logic) {
//   const output = []
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]))
//   }
//   return output
// }

// console.log(radius.calculate(area))
// console.log(radius.map(area))

// ex

// function x(){
//     console.log('namaste');
// }
// function y(x){
//    x()
// }
//ex-1:
// const radius = [3, 2, 1, 4]
// const calculateArea = function (radius) {
//   const output = []
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i])
//   }
//   return output
// }
// console.log(calculateArea(radius))

// const calculateDiameter = function (radius) {
//   const output = []
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * 2 * radius[i])
//   }
//   return output
// }
// console.log(calculateDiameter(radius))

// ex-2-- this example is u have to refer for the higher order function the above one is jst showed how the
// interviewer will write the code bt its not the gud to use

// const radius = [3, 2, 1, 4]

// const area = function (radius) {
//   return Math.PI * radius * radius
// }

// const diameter = function (radius) {
//   return 2 * radius
// }

// const calculate = function (arr, logic) {
//   const output = []
//   for (let i = 0; i < arr.length; i++) {
//     output.push(logic(arr[i]))
//   }
//   return output
// }

// // console.log(radius.map(area)) or console.log(calculate(radius, area)) both are same
// // console.log(calculate(radius, area))
// console.log(calculate(radius, diameter))

// Map -is used to transfer an array into new array

//very important question whts the diffrence btw map n forEach

// ex-1
//  to transfer this array into Double

// const arr = [5, 1, 3, 2, 6]

// function Double(x) {
//   return x * 2
// }

// const output = arr.map(Double) //[ 10, 2, 6, 4, 12 ]
// console.log(output)
// //ex-2
// // to transfer this array into Triple
// function Triple(y) {
//   return y * 3
// }

// const output1 = arr.map(Triple)
// console.log(output1) //[ 15, 3, 9, 6, 18 ]

// ex-3 transfer the array into binary values
// const arr = [5, 1, 3, 2, 6]
// function Binary(z) {
//   return z.toString(2)
// }

// const output2 = arr.map(Binary)
// console.log(output2) //[ '101', '1', '11', '10', '110' ]
//    OR both are same
// const output2 = arr.map(function Binary(z) {
//   return z.toString(2)
// })
// console.log(output2) //[ '101', '1', '11', '10', '110' ]
// OR both are same
// const output2 = arr.map((z) => z.toString(2))// using arrow function
// console.log(output2) //[ '101', '1', '11', '10', '110' ]

//FILTER function is used to filter the values inside an  array

// const arr = [5, 1, 3, 2, 6]
// //filter the odd numbers

// function isOdd(x) {
//   return x % 2
// }
// const output = arr.filter(isOdd)
// console.log(output) //[ 5, 1, 3 ]

// // or

// const output1 = arr.filter(function isOdd(x) {
//   return x % 2
// })
// console.log(output1) //[ 5, 1, 3 ]

// //or

// const output2 = arr.filter((x) => {
//   return x % 2
// })
// console.log(output2) //[ 5, 1, 3 ]

// //or

// const output3 = arr.filter((x) => x % 2)
// console.log(output3) //[ 5, 1, 3 ]

// //filter the Even numbers

// function isEven(x) {
//   return x % 2 === 0
// }
// const evenOutput = arr.filter(isEven)
// console.log(evenOutput) ///[ 2, 6 ]

//or

// const evenOutput1 = arr.filter(function isEven(x) {
//   return x % 2 === 0
// })
// console.log(evenOutput1) //[ 2, 6 ]

//or
// const evenOutput2 = arr.filter((x) => {
//   return x % 2 === 0
// })

// console.log(evenOutput2) ///[ 2, 6 ]

// const evenOutput3 = arr.filter((x) => x % 2 === 0)
// console.log(evenOutput3) ///[ 2, 6 ]

// filter x isgreathertahn 4

// function isGreater(x) {
//   return x > 4
// }
// const outputGreater = arr.filter(isGreater)
// console.log(outputGreater) //[ 5, 6 ]

//REDUCE

// const arr = [5, 1, 3, 2, 4, 6]

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr
//   }
//   return max
// }, 0)

// console.log(output)
// using non-functional way means without using reduce function

//find the sum of the array
// const arr = [5, 1, 3, 2, 6]
// function findSum(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }
//   return sum
// }
// console.log(findSum(arr))//17

//using reduce function
// const arr = [5, 1, 3, 2, 6]

// const output = arr.reduce(function (acc, curr) {
//   // acc means accumulator w.r.t above example
//   // its acting as a sum and 0 is passing the initial sum value i-e let sum =0 like that
//   // curr means current values of array
//   acc = acc + curr
//   return acc
// }, 0)
// console.log(output) //17

//find the max value in an array

// const arr = [5, 1, 3, 2, 6]

// function findMax(arr) {
//   let max = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }
// console.log(findMax(arr))//6

// using reduce function

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr
//   }
//   return max
// }, 0)
// console.log(output) //6

// using objects
// const arr = [
//   { firstName: 'arshi', lastName: 'tabassum', age: 27 },

//   { firstName: 'Mohsin', lastName: 'Mohammed', age: 32 },

//   { firstName: 'Aalim', lastName: 'Mohammed', age: 3 },
//   { firstName: 'Amsquare', lastName: 'Mohammed', age: 3 },
// ]
// //ex-1 to take the first name and last name from an array
// // const output = arr.map((x) => x.firstName + ' ' + x.lastName)
// // console.log(output)//[
// //     'arshi tabassum',
// //     'Mohsin Mohammed',
// //     'Aalim Mohammed',
// //     'Amsquare Mohammed'
// //   ]

// //ex-{27:1 32:1 3:2 }

// const output = arr.reduce(function (acc, curr) { //acc initially is an  empty object,
//   curr is current object
//   if (acc[curr.age]) { //acc[27]==>need to check is it present or not
//     acc[curr.age] = ++acc[curr.age] //acc[27] is already present means we need to add the age
//   } else {
//     acc[curr.age] = 1  //acc[27] if not there then assign it with 1
//   }
//   return acc
// }, {}) ==>{}-->initial value of accumulator which is empty object
// console.log(output) //{ '3': 2, '27': 1, '32': 1 }

// //find the age whos age is < 20 using filter

// const output1 = arr.filter((x) => x.age < 20)

// console.log(output1) //[
// //     { firstName: 'Aalim', lastName: 'Mohammed', age: 3 },
// //     { firstName: 'Amsquare', lastName: 'Mohammed', age: 3 }
// //   ]

// // first name all the peoples whos age is < 20 using filter n map

// // const output2 = arr.filter((x) => x.age < 20).map((x) => '' + x.firstName)
// // console.log(output2) //[ 'Aalim', 'Amsquare' ]

// // first name all the peoples whos age is < 20 using reduce

// let students = [
//   { name: 'arshi', rollNo: 35, marks: 40 },
//   { name: 'mohsin', rollNo: 15, marks: 30 },
//   { name: 'mustafa', rollNo: 53, marks: 20 },
//   { name: 'aalim', rollNo: 18, marks: 41 },
// ]

//1.print the name of the students in capital letter

// const nameStud = Students.map((x) => x.name.toUpperCase())
// console.log(nameStud) //[ 'ARSHI', 'MOHSIN', 'MUSTAFA', 'AALIM' ]

//2.written only the details of those student who scored  morethan 40

// const details = students.filter((x) => x.marks > 40)
// console.log(details) //[ { name: 'aalim', rollNo: 15, marks: 41 } ]

// 3.written only the details of those student who scored  morethan 40 and rollNo gretaterthan 15

// const details1 = students.filter((x) => x.marks > 40 && x.rollNo > 15)
// console.log(details1) //[ { name: 'aalim', rollNo: 18, marks: 41 } ]

//4.calcultae the sum of marks of all of this students

// const totalMarks = students.reduce((acc, cur) => {
//   return (acc = acc + cur.marks)
// }, 0)
// console.log(totalMarks) //131

//5.written only the names of the students who sccored morthan 40

// const nameStudents = students.filter((x) => x.marks > 40).map((x) => x.name)
// console.log(nameStudents)//[ 'aalim' ]

//6.written the total marks of the students  morethan 40 after 20 marks has been added to those who
//  scored lessthan 40

// const totalMarkStud = students
//   .map((x) => {
//     if (x.marks < 40) {
//       x.marks += 20
//     }
//     return x // 50 40
//   })
//   .filter((x) => x.marks > 40) //50 41
//   .reduce((acc, cur) => acc + cur.marks, 0)
// console.log(totalMarkStud) //91

// Q1. How are filter, map and reduce different?

// Ans: .map() transforms every element in an array individually and creates a new array. filter() removes elements that are not required and creates a new array containing the ones needed. Finally, reduce() reduces all array elements into a single value.

// Q2. What is the length of arrays made using .map() in javascript?

// Ans: Since map() individually transforms all elements of an array to create a new array, the length of the new array is the same as that of the original one.

// Q3. Does .filter() create new arrays of the same length as the previous one?

// Ans: Filter removes the unrequired elements while creating a new array and only includes the ones necessary. Therefore, the length of the new array is usually lesser than that of the original one.


// function close(){
//   for(var i =1;i <=5;i++){
//     function closest(x){
// setTimeout(()=>{
// console.log(x)
//   },x*1000)
//     }
  
//     closest(i);
//   }
// }
// close()


// const arr=[5,1,3,2,6,18,35,90];
// // const output=arr.map((x)=>x*2);
// // console.log(output)

// // function triple(x){
// //   return x*3
// // }

// // const output =arr.map(triple)
// // console.log(output)


// // function binary(x){
// //   return x.toString(2)
// // }
// // const output =arr.map(binary)
// // console.log(output)

// // function maxNumber(arr){
// //   let max =0;
// //   for(let i =0;i <arr.length;i++){
// //     if(arr[i] > max){
// //     max=arr[i];
// //     }
// //   }
// //   return max;
// // }
// // console.log(maxNumber(arr))

// const maxNum =arr.reduce((acc,curr,i)=>{

// if(acc > curr){
//   curr =acc;
// }
// return curr;
// },0)

// console.log(maxNum)


// function Sum(arr){
//   let sum =0;

//   for(let i =0;i<arr.length;i++){
//   sum=sum + arr[i];
//   }
//   return sum;
// }
// console.log(Sum(arr))

const Students=[
  {firstName:"Izzu",lastName:"mohad",age:5},
  {firstName:"aalim",lastName:"mohad",age:8},
  {firstName:"Mohsin",lastName:"mohammed",age:30},
  {firstName:"Arshi",lastName:"tabassum",age:30},
]

// const output=Students.map((x)=>x.firstName + " "+x.lastName)
// console.log(output)


// const output =Students.filter((x)=>x.age <30).map((x)=>x.firstName)
// console.log(output)

// const output =Students.reduce(function(max,curr){
// if(max[curr.age]){
//   max[curr.age]=++max[curr.age];
// }
// else{
//   max[curr.age]=1
// }
// return max;
// },{})
// console.log(output)

// const output =Students.filter((x)=>x.age < 30).map((x)=>x.firstName)
// console.log(output)

// const arr1 =[2,5,3,4,7];
// const outMap=arr1.forEach((x)=>x + 2)
// console.log(outMap)

// let Stud =[
//   {name:"piyush",rollno:31,marks:80},
//   {name:"jenny",rollno:15,marks:69},
//   {name:"kaushal",rollno:16,marks:35},
//   {name:"Dilpreet",rollno:7,marks:55},
 

// ];

// const output =Stud.map((x)=>x.name.toUpperCase())
// console.log(output);


// pollyfill for forEach Method:

const arrfor=[1,2,3,4];
// const out=arrfor.forEach((el)=> console.log(el))

// function arrf(el){
// console.log(el)
// }

// Array.prototype.myforEach=function (cb){

// for(let i=0;i< this.length;i++){
//  cb(this[i])
// }
// }

// arrfor.myforEach(arrf)

// const out=arrfor.map((el)=>el *2)
// console.log(out)


// Array.prototype.myMap=function (cb) {

//   let res =[];
//   for(let i =0;i <this.length;i++){
//     res.push(cb(this[i]))
//   }
//   return res;
// }

// const outMap=arrfor.myMap((el)=>el *2)
// console.log(outMap)

// const outFilter =arrfor.filter((el)=>el > 2)
// console.log(outFilter)

// const outReduce =arrfor.reduce((acc,cur)=>{
//   return acc +cur;
// },0)

// console.log(outReduce)
// Array.prototype.myFilter=function (cb){
// let res =[];
// for(let i =0;i <this.length;i++){
//  if(cb(this[i])){

//    res.push(this[i])
//  }
// }
// return res;
// }



// const fil=arrfor.myFilter((el)=>el > 2)
// console.log(fil)

// Array.prototype.myReduce =function (cb,initialValue){
//   let acc =initialValue;
//   console.log(acc)
//    for(let i =0 ;i <this.length;i++){
//     acc =acc ? cb(acc,this[i]) :this[i]
//     console.log(acc)
//    }
//    return acc;

// }

// const output =arrfor.myReduce((acc,curr)=>{
//   return acc + curr
// },0)

// console.log( output )



// call apply n bind methods


let object ={
  name:"Arshi",
  age:26,
  
}
let printfullObject= function (hometown,state,country){
  console.log(`${this.name} && ${this.age} && ${hometown} && ${state} && ${country}`)
  }
// printfullObject.call(object,"shimoga","karnataka")

let object2 ={
  name:"mohssin",
  age:29,

}

// printfullObject.apply(object2,["shimoga","karnataka"])

// let printObject =printfullObject.bind(object,"india")
// // console.log(printObject)
// printObject()

//pollyfill for call

// Function.prototype.myCall=function (obj={},...args){
//   if(typeof this !== "function"){
//     throw new Error("not callable")
//   }
//   obj.fn=this;
//   obj.fn(...args);



// }

// printfullObject.myCall(object ,"bengaluru","kar","india")

// pollyfill for Apply

// Function.prototype.myApply=function (obj={},...args){
// if(typeof this !== "function"){
//   throw new Error("not callable")
  
// }
// if(!Array.isArray(...args)){
//   throw new Error("TypeError: CreateListFromArrayLike called on non-object")
// } 
// obj.fn=this;
// obj.fn(...args)

// }

// printfullObject.myApply(object2,["hubli"])

// Function.prototype.myBind =function (obj={},...args1){
// if(typeof this !== "function"){
//   throw new Error("not callable");
// }
// obj.fn=this;
//   return function (...args2){
//  obj.fn(...args1,...args2)
//   }

// }

// let printObject = printfullObject.myBind(object,"karnataka")
// printObject("gurodi")

// const arr=[1,2,[[3,4]]];
// // const output=arr.flat(2);//depth  of the array by default depth will be 1
// // console.log(output)//returns new copy of the array

// Array.prototype.myFlat =function (depth){
// let res =[];
// if(!Array.isArray(this)){
//   throw new Error("flat is not a function")
// }
// this.forEach((el)=>{
//   if(Array.isArray(el) && depth > 0){
//     res.push(...el.myFlat(depth-1))
//   }
//   else{
//     res.push(el)
//   }
// })
// return res;

// }
// const output=arr.myFlat(2)
// console.log(output)

// promises


// console.log("start")
// const pr =new Promise((resolve,reject)=>{
//   if(10 < 4){
//     resolve("success")
//   }
//   else{
//     reject("Error")
//   }
// }).then((data)=>{
//     console.log(data)
//   }).catch((err)=>{
//     console.log(err)
//   })
//   return pr;
//   console.log("ended")


  // const handlePro =async function(){
  //   const data =await fetch("https://dummyjson.com/users");
  //   const json =await data.json()
  //   console.log(json)

  // }
  // handlePro();

  const url="https://dummyjson.com/users";

const response =fetch(url).then((res)=>console.log(res)).catch((err)=>console.log(err))
