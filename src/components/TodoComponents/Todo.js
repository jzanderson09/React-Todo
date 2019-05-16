import React from 'react';

const Todo = props => <li className="newTask" onClick={props.clickCompleted}>{props.item}</li>

export default Todo;

