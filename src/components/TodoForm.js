import React from 'react'
import '../stylesheets/TodoForm.css'

function TodoForm(props) {
    return(
        <form className='todo-form'>
            <input 
            className='todo-input'
            type='text'
            placeholder='Type a to-do'
            name='text'
            />
            <button className='todo-button'>
                Add to-do
            </button>
        </form>
    )
}

export default TodoForm