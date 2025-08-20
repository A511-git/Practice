import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter]=useState(0);
  let addValue = ()=>{
    if(counter == 20){
      alert("stop!! just how free r u ? u litt reached 20 - FREAKING 20 CLICKS AWAAAAAAAA");
      return;
    }
    setCounter(++counter) 
  }

  let removeValue = ()=>{
    if(counter==0) return;
    setCounter(--counter);
  }

  return (
    <>
     <h1>Bokka Chan</h1>
     <h3>Counter : {counter}</h3>     
     <br />
     <button onClick={addValue}>Click</button>
     <br /><br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
