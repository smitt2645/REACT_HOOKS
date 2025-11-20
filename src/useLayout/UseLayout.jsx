import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayout = () => {
    const [bg,setBg] = useState("black");
    useLayoutEffect(()=>{
        document.body.style.background = bg;
    },[bg]);
    useEffect(()=>{
        console.log("before render",bg);
    },[bg]);
  return (
    <>
    <div>useLayout</div>
    <button onClick={()=>setBg("red")}>red</button>
    <button onClick={()=>setBg("green")}>green</button>
    <button onClick={()=>setBg("blue")}>blue</button>
    </>
  )
}

export default UseLayout