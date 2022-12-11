import './App.css';
import TodoList from './TodoList';
import { useState,useRef,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
const [todos,setTodos]= useState([])
const rendercount=useRef(0);
const todoNameRef=useRef();
useEffect(()=>{
const storedTodos=JSON.parse(localStorage.getItem("todos"))
if(storedTodos) setTodos(storedTodos)

},[])
useEffect(()=>{
rendercount.current=rendercount.current+1
})
useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

function handleTodo(id){
const newTodos=[...todos]
const todo=newTodos.find(todo=>todo.id===id)
todo.complete=!todo.complete
 setTodos(newTodos)
}

function handleClearComplete(){
const clear=todos.filter(todo=>!todo.complete)
setTodos(clear)
  
}
function handleAddTodo(e){
const name =todoNameRef.current.value
if(name==="") return 
console.log(name)

setTodos(prevTodos=>{
  return [...prevTodos,{id:uuidv4(),name:name,complete:false}]
})

todoNameRef.current.value=null
}

return (
<>
 <TodoList todos={todos}  toggleTodo={handleTodo} />
 // TodoList is there to map and render all the elements
 // Todo is just a element which is going to be mapped 
 <input ref={todoNameRef} type="text" />
 <button onClick={handleAddTodo}>Add todo</button>
 <button onClick={handleClearComplete} >Clear Complete</button>
<div   >{todos.filter(todo=>!todo.complete).length} left to do</div>
<h1>I render {rendercount.current} times </h1>
 </>  
  );
}

export default App;
