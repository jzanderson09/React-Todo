import React from 'react';

function Todo (props) {
    return (
        <li className="newTask" onClick={props.clickCompleted}>{props.item.task}</li>
    );
}

export default Todo;

