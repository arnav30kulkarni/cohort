import './App.css'
// a wrapper is a sort of card(component) which takes another component as an input

function App() {
  return ( <div>
    <CardWrapper InnerComponent = <TextComponent/> />
    </div>)
}

function TextComponent(){
    return(
    <div>
        hello world!
    </div>
    );
}

function CardWrapper({InnerComponent}){
 return (<div style={{border:"10px solid white",padding:"10px"}}>
 {InnerComponent}
 </div>);
}

export default App
 
