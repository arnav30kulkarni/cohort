function identify<T>(arg: T):T{
    return arg;
}

let output1 = identify<string>("Mystring");
let output2 = identify<number>(123);

//<T> means a generic value,can be called with anything

function getFirstEl<T>(arr:T[]){
    return arr[0];
}

// you can also give an interface like user 

interface user{
    name:string
}

const el= getFirstEl(["arnavk","tanmayy"]);
const el2=getFirstEl([1,2]);
const el3=getFirstEl<user>([{name:"arnav"}])
console.log(el?.toUpperCase());

