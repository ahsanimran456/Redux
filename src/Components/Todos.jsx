import React, { memo } from 'react'

const Todos = ({ todos, OnDelete }) => {
    return (
        Array.isArray(todos) && todos.length > 0 && todos.map((todo, index) => {
            return (
                <ul>
                    <li key={todo.id}>{todo.text} <button onClick={()=>OnDelete(todo.id)}>Delete</button></li>
                </ul>
            )
        })
    )
}

export default memo(Todos);