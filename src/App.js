import { useState } from 'react';

export default function(){
  return(
    <Counter/>
  )
}

function Counter(){
  return(
    <div>
      <title> Counter  App </title>
      <h1 style={{textAlign: "center"}}> Counter </h1>
      <CounterBox/>
    </div>
  )
}

function CounterBox(){
  const [count, setCount] = useState(0);

  return(
    <div style={{display: "flex"}}>
      <CounterButtons count={count} setCount={setCount}/>
      <CustomAdder count={count} setCount={setCount}/>
    </div>
  )
}

function CounterButtons({count, setCount}){

  function HandleClick(amount){
    setCount(count + amount);
  }

  return(
    <form>
      <button type='button' onClick={() => HandleClick(-10)}>-10</button>
      <button type='button' onClick={() => HandleClick(-1)}>-1</button>

      <h2>{count}</h2>

      <button type='button' onClick={() => HandleClick(+10)}>+10</button>
      <button type='button' onClick={() => HandleClick(+1)}>+1</button>
    </form>
  )


}

function CustomAdder({count, setCount}){
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAdd() {
    let value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      setCount(count + value);
    }
  }

  function handleKeyDown(event) {
    if (event.key == "Enter") {
      handleAdd();
      event.preventDefault();
    }
  }

  return(
    <form>
      <h4>Add: </h4>
      <input onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="..."></input>
    </form>
  )
}