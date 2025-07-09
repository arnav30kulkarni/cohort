//------------------AsyncAwaitPromises-----------

// synchronous : one thing happening at a time

// asynchronous: multiple things happening at a time (context switching)

//synchrounous function example

// function findSum(n){
//     let ans=0;
//     for(let i=0;i<n;i++){
//         ans+=i;
//     }
//     return ans
// }
// console.log(findSum(1000));

//async

// function findSum(n){
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum+=i
//     }
//     return sum
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100,1000)
// console.log("hello world!");


//// other async functions
// fs.readFile-to read a file from your filesystem
// fetch :- to fetch some data from api endpoints

// const fs = require("fs");
// fs.readFile("a.txt","utf-8", (err,data) => {
//     console.log(data);
// })
//  console.log("hi there");
 
// ⚠️ Important: fs.readFile() is asynchronous, so this will run in the background. The rest of the code outside this callback will run immediately without waiting for the file to finish reading.

//------------promises---------------------------

// const fs = require("fs")

// function kiratsReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("../a.txt","utf-8" , function(err,data){
//             resolve(data);
//         });
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// kiratsReadFile().then(onDone);

// there are no callbacks(parameters) in promises

// var d = new Promise(function(resolve){
//     resolve("how are you?");
// });
// function callback(){
//     console.log(d);
// }

// d.then(callback)

// whenever we create it we need to pass function as first arguement which has resolve as first arguement

// function arnavAsyncFn(){
//     let p= new Promise(function(resolve){
//         resolve("hi there!")
//     })
//     return p;
// }

// const value = arnavAsyncFn()
// value.then(function(data){
//     console.log(data);
// })

//-------------------Async Await--------

// cleaner than .then

// function arnavAsync(){
//     let p = new promise(function(resolve){
//         setTimeout(function(){
//             resolve("hi there")
//         },4000);
//     })
// }

// async function main(){
//     let value = await arnavAsync();
//     console.log(value);
// }
// console.log("after main");l


// any function that needs to have await needs async function at topmost level
