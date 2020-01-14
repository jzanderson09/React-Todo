import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = props => {
    const [todo, setTodo] = useState({
        task: '',
        id: '',
        completed: false
    });

    const changeHandler = event => {
        event.preventDefault();
        setTodo({
            ...todo,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        const newTodo = {
            ...todo,
            id: Date.now()*100
        };
        props.addTodoItem(newTodo);
        setTodo({
            task: '',
            id: '',
            completed: false
        });
        window.alert('Success:  New todo list item added!');
    };

    return (
        <div className='TodoForm-container'>
            <form onSubmit={submitForm}>
                <input 
                    name='task'
                    value={todo.task}
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