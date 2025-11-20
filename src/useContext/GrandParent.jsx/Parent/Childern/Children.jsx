import React, { useContext } from 'react'
import {myContext} from "../../../UseContext";
const Children = () => {
  const context = useContext(myContext);
  console.log("context:",context)
  return (
    
  <div style={{marginTop:"15px"}}>Children : <h6 style={{background:"red"}}>{context.name}</h6>
    set name from the children :<button onClick={()=> context.setName("Amit ")}>change name</button>
    </div>
  )
}

export default Children