interface users {
    name: string,
    email: string,
    password: string,
    age: number,
    gender:String
};

type updateProps = Pick<users,'name'|'age'|'email'>
type updatePropsOptional = Partial<updateProps>;

const updateUser = (updateProps : updatePropsOptional): any => {
    console.log(`name: ${updateProps.name}, age: ${updateProps.age}`)   
}

const result = updateUser({
    name: "arnav"
});

console.log(result);


