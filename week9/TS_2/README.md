## `Enums` in Typescript 

> `Enums` in typescript are features that allows you to define set of named constants 

The concept behind enums is to create a human-readable way to represent a set of values,which otherwise would be represented as strings or numbers

```ts
enum Directions {
    Up,
    Down,
    Left,
    Right
}

function movement(keyPressed: Directions){
    //logic
}

movement(Directions.Up)
```

You also give custom `values` to the enum

```ts
enum Directions {
    Up="up",
    Down="down",
    Left="left",
    Right="right"
}
```

### use case in `express`

```ts
const app=express();

enums ResponseStatus {
    success=200,
    Notfound=404,
    Error=500
}

app.get("/",(req,res)=>{
 if(!req.query.userId){
    res.status(ResponseStatus.NotFound).json({msg:"User not found!"})
 }
 // and so on
})
```

## Generics in Typescript