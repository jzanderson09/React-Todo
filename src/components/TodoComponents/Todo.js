import React from 'react';

function Todo(props) {
    return(
        <div className="todo-container">
            <h1>task: {props.taskItem.task}</h1>
        </div>    
    );
}

export default Todo;