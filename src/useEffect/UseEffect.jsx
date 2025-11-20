import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [counter,setCounter] = useState(0);
  console.log("counter:",counter)
  useEffect(()=>{
    if(counter === 4){
      console.log("desire counter is !",counter);
    }
  },[counter]); // here we have dependecy array with counter value change !
  return (
    <div>useEffect
      {counter}
      <button onClick={()=>setCounter((prev)=> prev + 1)}>Increase</button>
      <button onClick={()=>setCounter((prev)=> prev - 1)}>Decrease</button>
    </div>
  )
}

export default UseEffect;