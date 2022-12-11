import React from 'react'
import { ACTIONS } from './App'
export default function Digit({dispatch,digit}) {
  return (
    <button onClick={()=>dispatch(type)}>{digit}</button>
  )
}
