import React from 'react'

export default function Todo({todo,toggleTodo}) {
 
 function toggler(){
    toggleTodo(todo.id)
 }
    return (
<div>
<label htmlFor="">
<input type="checkbox" checked={todo.complete}  onChange={toggler} />
{todo.name}
</label>

</div>
  )
}
