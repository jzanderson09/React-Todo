import React, { Component } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const dummyData = [
  {
    task: 'Organize Garage',
    id: Date.now()*100,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now()*50,
    completed: false
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: dummyData
    }
  }

  addTodoItem = newTodoItem => {
    this.setState({ todoList: [...this.state.todoList, newTodoItem] })
  };

  toggleCompleted = todoId => {
    const itemIndex = this.state.todoList.findIndex(obj => obj.id === todoId);
    const newTodoList = this.state.todoList;
    newTodoList[itemIndex].completed = !newTodoList[itemIndex].completed;
    this.setState({ todoList: newTodoList });
    console.log(newTodoList);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>Todo List:</h3>
        <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted} />
        <TodoForm addTodoItem={this.addTodoItem} />
      </div>
    );
  }
}

export default App;
