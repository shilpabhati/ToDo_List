import React from 'react'

export default function ToDoItem({todo, onDelete}) {
  return (
    
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>

    </div>
  )
}
