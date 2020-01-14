import React, { useState } from 'react';
import './Todo.css';

const Todo = props => {
    const [task, setTask] = useState('Todo-container');
    const [itemState, setItemState] = useState('todo-item');

    const completeTask = event => {
        event.preventDefault();
        if (itemState === 'todo-item') {
            setItemState('todo-item completed');
            setTask('Todo-container complete');
        }
        else {
            setItemState('todo-item');
            setTask('Todo-container');
        }
        props.toggleCompleted(props.todoItem.id);
    };

    return (
        <div className={task}>
            <p onClick={completeTask} className={itemState}>Todo item: {props.todoItem.task}</p>
        </div>
    );
};

export default Todo;