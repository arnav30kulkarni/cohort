import { useMemo, useState } from 'react';
//useMemo helps avoid complete rerendering when one of the value to rerender 
function App(){
    const[counter,setCounter]=useState(0);
    const[inputValue,setInputValue]=useState(1);
    
    let count = useMemo(()=>{
        let count = 0 
            for(let i=0;i<=inputValue;i++){
            count = count + i;
    }
    return count
       },[inputValue]
    );
    
    return(
        <div>
           <input onChange={function(e){
            setInputValue(e.target.value);
            //  here e.target.value sets the value input as on inputValue
           }} placeholder={'enter your number'}/> <br />
            sum from 1 to {inputValue} is {count}  <br />
            <button onClick={()=>{
                setCounter(counter => counter + 1);
            }}>count is ({counter})</button>
        </div>
    )
}

export default App;