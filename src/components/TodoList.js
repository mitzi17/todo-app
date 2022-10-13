import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import '../stylesheets/TodoList.css'

function TodoList() {

const [ todos, setTodos ] = useState([])

const addTodo = todo => {
    console.log("Todo added")
    console.log(todo)
}

    return (
        <>
            <TodoForm />
            <div className='todo-list-container'>
                {
                    todos.map((todo) =>
                        <Todo
                        text={todo.text}
                        complete={todo.complete} />
                    )
                }
            </div>
        </>
    )
}

export default TodoList