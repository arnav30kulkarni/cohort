# 📘 TypeScript Basics

This repository contains fundamental concepts of TypeScript including interfaces, type aliases, unions, intersections, and working with arrays.

---

## 📖 What is TypeScript?

TypeScript is a strongly typed superset of JavaScript that adds static typing and modern features on top of JavaScript.

It helps developers:

- Catch errors at compile time
- Write safer and more scalable code
- Improve maintainability
- Get better IDE support and autocompletion

TypeScript compiles into plain JavaScript, which runs anywhere JavaScript runs.

---

## ⚙️ What is `tsc`?

`tsc` stands for **TypeScript Compiler**.

It converts `.ts` files into `.js` files.

### Install TypeScript

```bash
npm install -g typescript
tsc -v
```
### compile a file 

```bash 
tsc index.ts
```
## Interface in typescript

Interface is a way to define the shape of an object.
tells compiler that an object must have these properties.

```ts
interface User{
    firstname:string;
    lastname:string;
    age:number;
}
```


## Types in Typescript.

Similar to interfaces,let you aggregate data together.

```typescript
type User = {
    firstname: string;
    lastname: string;
    age: number;
}
```
types let you use various operations like 
- Unions
- Intersection 


### Passing an array as an arguement in typescript 

```ts 
function fn(arr:number[]):number{
    //logic goes here
}
```