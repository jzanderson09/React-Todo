// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//Receives your Todos array and iterates over
//the list generating a new <Todo /> for each
//element in the array.

import React from 'react';

import Todo from './Todo';

function TodoList(props) {
  return(
    <ul className="todo-container">
      {props.list.map(taskItem => (
      <Todo task={taskItem} />
      ))}
    </ul>
  );
}

export default TodoList;