// let FirstName = "arnav";
// let surname = "k";
// console.log("Hello" , FirstName , surname);

// const gender = "male";
// if (gender == "male"){
//     console.log("hello male");
// }
// else{
//     console.log("hello female");
// }

 
// for(let i=0;i<=100;i++){
//     console.log(i);    
// }

// const arr=[1,24,43,66];
// const arr2 = new Array(1,2,3,4);
// console.log(arr);
// console.log(arr2);

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }


// const arr=[12,43,211,1];
// let max=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         console.log("The current index of arr is", i, arr[i], "and the current max is", max);
//         max = arr[i];
//         console.log("new updated max is", max);
//     }
// }
// console.log(max);

// const arnav={
//     age:18,
//     gender:"male",
//     roll_no:2
// }
// console.log(arnav.age);

// const arr=[{
//     firstname:"arnav",
//     gender:"male",
// },{
//     firstname:"tanmay",
//     gender:"male"
// },{
//     firstname:"xyz",
//     gender:"female"
// }]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]["gender"]=="male"){
//         console.log(arr[i]["firstname"]);
//     }
// }

// functions

// const callarnav = function caller(fname){
// console.log("hello", fname);
// }

// callarnav("arnav");


// let add = function (a,b){
//     console.log(a+b);
// }
// add(1,5);

// let func=function(a,b){
// return a-b;   
// }
// let sup=func(5,4);
// console.log(sup);
// console.log(func(5,4));

// let sq = function (a){
//     return a*a;
// }
// console.log(sq(2));


// let prime = function (p) {
//     for (let i = 2 ; i < p; i++) {
//         return NaN;
//         if (p % i === 0) {
//             return false;
//         }
//         console.log(i);
//     }
//     return true;
// }

// console.log(prime(11));



// let cube= (a) => {
//     return a*a*a;
// }
// console.log(cube(7));


// let hw = () =>{return "hell"}
// console.log(hw())

// function son(){
//     console.log("son");
// }

// function daddy(){
//     son();
// }
// daddy();

// let i = 3
// function dummy() {
//     if(i == 6) {
//         return;
//     }
//     console.log("DUMMY ARNAR");
//     i++;
//     dummy();
// }

// dummy();

//// anonymous function, arrow function, callback function,recursion, global and local scope of variable

// function arnav () {
//     console.log("Arnav");
// }
// setTimeout(arnav,4000)
     
// --------- CLASSES-----------------



// class person {
//     constructor(name, gender, age) {
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         // console.log(name + " "+ age);
//     }
//     printer() {
//         console.log(age);
//     }

// }

// let person1 = new person("tanmay","male",21);
// person1.printer();

// class Demo{
//     printer(content) {
//         console.log(content)
//     }
// }

// let obj = new Demo();
// obj.printer("HEllo!")



// class calc{
//     constructor(name){
//         this.name = name;
//         console.log("name of calculator is: " + this.name);
//     }
//     add(a,b){
//         console.log(a + b);
//     }
//     sub(x,y){
//         return x-y;
//     }
// }   
// let cal1 = new calc("calculator1")
// cal1.add(1,5);
// let sub1 = cal1.sub(7,3);
// console.log(sub1);
// console.log(cal1.name);
 

// Static 

// class demo{
//     static hello(){
//         console.log("hello world!");
//     }
// }

// let oj = new demo();

// demo.hello();

const arr=[1,25,89,11]
for(let i=0; i<arr.length;i++){
    max = 0
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);