import React, { createContext, useState } from 'react'
import GrandParent from './GrandParent.jsx/GrandParent'

export const myContext = createContext(null);
const UseContext = () => {
    const [name,setName] = useState("Smit Trivedi");
  return (
    <div>
      GrandParent : <h6 style={{background:"red"}}>{name}</h6>
      <button onClick={()=>setName("Smit Trivedi")}></button>
      <myContext.Provider value={{name,setName}}>
        <GrandParent/>
      </myContext.Provider>
      <button onClick={()=>setName("Amit Trivedi")}></button>
    </div>
  )
}

export default UseContext;