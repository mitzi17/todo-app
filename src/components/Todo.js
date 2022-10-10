import React from 'react'
import '../stylesheets/Todo.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Todo({ text, complete }) {
    return(
        <div className={complete ? 'todo-container complete' : 'todo-container'}>
            <div className='todo-text'>
                {text}
            </div>
            <div className='todo-container-icons'>
                <AiOutlineCloseCircle className='todo-icon'/>
            </div>
        </div>
    )
}

export default Todo