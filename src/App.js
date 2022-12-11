import './App.css';
import React,{useState,useReducer} from 'react';
import "./styles.css"
// function reducer(state,action ){
// switch (action.type){
// case "increament":
// return {count:state.count+1}
// case "decreament":
// return {count:state.count-1}
// default:
// return state
// }

export const ACTIONS={
ADD_DIGIT:"add_digit",
CLEAR_ACTION:"clear",
DELETE:"delete-digit",
CHOOSE_OPERATION:"choose operation",
EVALUATION:"evaluation"
}


function reducer(state,{type,payload}){
switch(type){
  case ACTIONS.ADD_DIGIT:
    return {
      ...state,
      current:`${current ||" "}${payload.digit} `
    }
}
}
function App() {
  const [{current,previous,operation},dispatch]=useReducer(reducer,{})


  return (
    <>
<div className='calculator-grid'>
<div className='output'>
<div className='previous'>
8908908908

</div>
<div className='current'>8098908</div>
</div>
<button className='span-two'>AC  </button>
<button>DEL</button>
<button>/</button>
<button>1</button>
<button>2</button>
<button>3</button>
<button>*</button>
<button>4</button>
<button>5</button>
<button>6</button>
<button>+</button>
<button>7</button>
<button>8</button>
<button>9</button>
<button>-</button>
<button>.</button>
<button>0</button>
<button className='span-two'>=</button>


  
</div>

</>
  );
}

export default App;
