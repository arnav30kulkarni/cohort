//what is the difference between interfaces and types in typescript?:
//interfaces can be used to define classes,types cannot
//you cannot use operations like union and intersection with interfaces, but you can with types

//union types
type ID = number|string;

const displayUserId = (id:ID)=>{
    console.log(`the id is ${id}`);
}

displayUserId(123);
displayUserId("456");

//intersection types;

type Employee = {
    name:string,
    startDate:Date
}

type Manager = {
    name:string,
    department:string
}

type teamLead= Employee &  Manager;

const lead: teamLead = {
    name:"arnav",
    startDate:new Date(),
    department:"developer"
};
