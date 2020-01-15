import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = props => {
    // Conditional rendering depending on quantity of tasks in todoList:
    if (props.todoList.length === 0) {
        return (
            <div className='TodoList-container'>
                <h3>You have no current tasks!</h3>
                <h3>Please enter a new task to build your list!</h3>
        </div>
        );
    }
    return (
        <div className='TodoList-container'>
            <div className='selection-div'>
            <button className={`select${props.allSelected ? ' all' : ''}`} onClick={props.selectAll}>√</button>
            </div>
            {props.todoList.map(item => {
                return (
                    <Todo 
                        key={item.id} 
                        item={item}
                        toggleCompleted={props.toggleCompleted}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;