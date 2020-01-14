import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='TodoList-container'>
            {props.todoList.map(todoItem => {
                return (
                    <Todo 
                        key={todoItem.id} 
                        todoItem={todoItem}
                        toggleCompleted={props.toggleCompleted}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;