import React from 'react'
import Todo from './Todo'
export default function TodoList({todos,toggleTodo}) {
  return (
  todos.map(todo=>{
    return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
  })  
 // todo list is to map all the elements
 // todo is the element wwhich we are importing 
  )
}
// Things are not very difficult