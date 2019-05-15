import React from 'react';

import TodoList from './TodoList';

// const Todo = {props.task.map(taskItem => {
//     <h3>{taskItem}</h3>
// });

function Todo(props) {
    return(
        <li>{props.task}</li>
    );
}

export default Todo;

