import React from 'react'
import '../stylesheets/Todo.css'

function Todo({ text }) {
    return(
        <div className='todo-container'>
            <div className='todo-text'>
                {text}
            </div>
            <div className='todo-icon'>
                Delete
            </div>
        </div>
    )
}

export default Todo