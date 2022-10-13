import React, { useState } from 'react'
import '../stylesheets/TodoForm.css'

function TodoForm(props) {

    const [ input, setInput ] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        
        const newTodo = {
            id: '34545',
            text: input,
            complete: false
        }
    }

    return(
        <form
            className='todo-form'
            onSubmit={handleSubmit}>
            <input 
                className='todo-input'
                type='text'
                placeholder='Type a to-do'
                name='text'
                onChange={handleChange}
            />
            <button className='todo-button'>
                Add to-do
            </button>
        </form>
    )
}

export default TodoForm