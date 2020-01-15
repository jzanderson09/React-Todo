import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = props => {
    return (
        <div className='TodoList-container'>
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