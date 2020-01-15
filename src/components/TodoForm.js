import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = props => {
    const [input, setInput] = useState('');

    const changeHandler = event => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const submitForm = event => {
        if (input === '') {
            event.preventDefault();
            window.alert('Input field empty:  Please enter a new task!');
        }
        else {
            event.preventDefault();
            props.addTodoItem(input);
            window.alert('Success:  New task added!');
            setInput('');
        }
    };

    return (
        <div className='TodoForm-container'>
            <form onSubmit={submitForm}>
                <input 
                    name='task'
                    value={input}
                    onChange={changeHandler}
                    placeholder='I need to...'
                    autoComplete='off'
                />
                <button>Add Todo</button>
            </form>
            <button className='clear-completed' onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    );
};

export default TodoForm;