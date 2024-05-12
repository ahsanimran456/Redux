import React, { memo } from 'react'

const Todos = ({ todos }) => {


    return (
        Array.isArray(todos) && todos.length > 0 && todos.map((todo, index) => {
            return (
                <ul>
                    <li key={todo.id}>{todo.text}</li>
                </ul>
            )
        })
    )
}

export default memo(Todos);