import React from 'react';

import Todo from './Todo';

function TodoList(props) {
  return (
    <ul className='todoList'>
      {props.list.map(listItem => (
        <Todo 
          item={listItem}
          clickCompleted={props.clickCompleted}
        />
      ))}
    </ul>
  );
}

export default TodoList;