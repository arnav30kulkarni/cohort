import { useState } from "react";

function CreateTodo(){
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");

    return <div>   
        <input style={{
            padding: 10,
            margin:10,
            borderRadius:15
        }}
        type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}/> <br /> 
        <input  style={{
            padding: 10,
            margin:10,
            borderRadius:15
        }}
        type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value)
        }}/> <br />
        <button style={{
            padding: 10,
            margin:10,
            borderRadius:15
        }} onClick={async ()=>{
            const response = await fetch("http://localhost:3000",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            await response.json();
            alert("todo added");
        }}>Add a todo</button> <br />
    </div>
}

export default CreateTodo