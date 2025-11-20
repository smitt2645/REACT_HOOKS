import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from "./useEffect/UseEffect.jsx";
import UseLayout from './useLayout/useLayout.jsx';
import UseContext from './useContext/UseContext.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
 <>
  {/* <UseEffect/> */}
  {/* <UseLayout/> */}
    <UseContext/>
 </>
  )
}

export default App
