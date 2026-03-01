interface user{
    firstname:string,
    lastname:string,
    email?:string,  // '?' denotes optional property 
    age:number
}

function isLegal(person:user):boolean{
    if(person.age>=18){
        return true;
    }
    return false;
}

console.log(isLegal({
    firstname:"arnav",
    lastname:"kulkarni",
    email:"ak@gmail.com",
    age:20}));



interface person{
    name:string,
    age:number,
    greet(phrase:string):void
}

class Employee implements person{
    name:string;
    age:number;

    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}
