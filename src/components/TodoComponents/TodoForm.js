import React from 'react';

import './Todo.css';

function TodoForm(props) {
    return(
        <form
            name='taskAddForm'
            onSubmit={props.addTaskHandler}
            className='form'
            autoComplete='off'
        >
            <input
                type='text'
                placeholder='Enter new task here!'
                value={props.task}
                name='task'
                onChange={props.changeHandler}
             />
            <button className='addTodo-button' onClick={props.addTodo}>
            Add to Task!</button>
            <button className='clearCompleted-button' onClick={props.complete}>
            Clear Completed!</button>
        </form>
    );
}

export default TodoForm;