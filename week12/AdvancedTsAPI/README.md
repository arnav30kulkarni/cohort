# Advanced Typescript APIS:

## Pick:

`Pick` allows you to create a new type by selecting a set of properties (keys) from an existing type (Type)

Pick is useful when: 
- If the DataType of original Interface is changed then the new iinterface with same Constraint also needs to be changed:- Pick function is useful for that.    

```ts
interface users {
    name: string,
    email: string,
    password: string,
    age: number,
    gender:String
};

type updateProps = Pick<users,'name'|'age'|'email'>

const updateUser = (updateProps : updateProps): any => {
    console.log(`name: ${updateProps.name}, age: ${updateProps.age}`)   
}

const result = updateUser({
    name: "arnav",
    email: "arnavgg@gmail.com",
    age:18
});

console.log(result);

```

---

## Partial:

`Partial` marks all properties of a type as `optional`, creating a type with same properties, but each marked optional 

> Useful for updates

### for the examples above:-

```ts
type updateProps = Pick<users, 'name' | 'age' | 'email'>

// use of Partial 

type OptionalProps = Partial<updateProps>
```

---

## Readonly:

`Readonly` Allows you to enforce that the user cannot change the `internal values` of an object or an Array During typescript Compilation 

```ts
interface users {
    name: string,
    age: number 
}

const user = Readonly<users> = {
    name: "arnav"
    age: 18
}

// you can't do something like users.age = 12`
```
> Good use case:

Prevent accidental update of API keys, etc. 

```ts
interface config {
    endpoint: string,
    apikey : string
} 

const config : Readonly<config> = {
    endpoint: "https://api.example.com",
    apikey : "abcde125k"   
}
```

---

## Records and maps: 

`Record` lets you give cleaner types to objects 

```ts
// Than using types for something like a dict of string and object

interface users{
    name:string,
    age:number
}

type User = Record<string,users>;

const users: users{
    'abc123': {
        name: "arnav",
        age: 18
    }
    'tnx126': {
        name: "thnx",
        age: 17
    }
}

console.log(users["abc123"]);
```

Maps are concept from js which makes this easier to write,
similar to C++

```ts
const users= new Map();

users.set("abc123",{
        name: "arnav",
        age: 18
    }
)
const user = users.get("abc123");
console.log(user);
```

---

## Exclude: 

Exclude is a function in which you can exclude some types passed to it

```ts 
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'mousemove'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`)
}

handleEvent('click')
```

---

## Type Inference of zod:

Lets say we have created a schema for user using zod, and we want a type which contains the exact schema as zod this can be done with typescript by: 

```ts
const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.string().minimum(18).optional()
})

type userType = z.infer<typeof userSchema>;
```
---
