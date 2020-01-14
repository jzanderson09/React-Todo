import React, { Component } from 'react';
import dummyData from './dummyData';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


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

  clearCompleted = () => {
    const updatedTodoList = this.state.todoList.filter(taskObj => taskObj.completed === false);
    if (!(this.state.todoList.length === updatedTodoList.length)) {
      if (window.confirm('Are you sure you want to clear your completed todo items?') === true) {
        this.setState({ todoList: updatedTodoList });
      }
    }
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>Todo List:</h3>
        <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted} />
        <TodoForm addTodoItem={this.addTodoItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
