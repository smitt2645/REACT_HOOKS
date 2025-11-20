import React from 'react'
import Children from './Childern/Children'

const Parent = () => {
  return (
    <div>
      This is the parent of children but we we dont have need to use data here which is coming from the GrandParent ! 
       <Children/></div>
  )
}

export default Parent