import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const[recipes,setRecipes] = useState([]);
  
  useEffect(() =>{
      axios.get("https://dummyjson.com/recipes")
    .then(function(res){
      setRecipes(res.data.recipes);
    })         
    },[])

  return (
      <>
        {recipes.map((rec)=>{
          return <Recipe key={rec.id} name={rec.name} ingredients={rec.ingredients}/>
        })}
    </>
  )
}

function Recipe({name,ingredients}){
  return(
    <div>
    <h1>
      {name}
    </h1>
    <h4>
      {ingredients}
    </h4>
    </div>
  )
}
export default App
