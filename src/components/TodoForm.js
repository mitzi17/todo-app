import React, { useState } from 'react'
import '../stylesheets/TodoForm.css'
import { v4 as uuidv4 } from 'uuid'

function TodoForm(props) {

    const [ input, setInput ] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        
        const newTodo = {
            id: uuidv4(),
            text: input,
            complete: false
        }
        props.onSubmit(newTodo)
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