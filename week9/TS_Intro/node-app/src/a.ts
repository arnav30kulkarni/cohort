// Typescript provides some types like:
// number,string,boolean,null,undefined,void,etc



function hello(name:string){
    console.log("hello "+name);
}

hello("world");

//return type of function:

function add(a:number,b:number):number{
    return a+b;
};

console.log(add(2,3));

//return type bool 

function isLegal(age:number):boolean{
    if(age>=18){
        return true;
    }else{
        return false;
    }
};

console.log(isLegal(21));

//return after 1s function as input

function delay(fn:()=>void):void{
    setTimeout(fn,1000);
}

delay(()=>{
    console.log(isLegal(21));
})
