import React, { Component } from 'react';
import dummyData from './dummyData';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: dummyData
    }
  }

  addTodoItem = newTodoItem => {
    const newTodo = {
      id: Date.now()*367,
      task: newTodoItem,
      completed: false
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] })
  };

  toggleCompleted = todoId => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(todoItem => {
        if (todoItem.id === todoId) {
          return {
            ...todoItem,
            completed: !todoItem.completed
          };
        }
        return todoItem;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const updatedTodoList = this.state.todoList.filter(taskObj => taskObj.completed === false);
    if (!(this.state.todoList.length === updatedTodoList.length)) {
      if (window.confirm('Are you sure you want to clear your completed items?')) {
        this.setState({ todoList: updatedTodoList });
      }
    }
  };

  render() {
    return (
      <div className='App-container'>
        <h2>Welcome to your Todo App!</h2>
        <h3>Todo List:</h3>
        <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted} />
        <TodoForm
          input={this.state.input}
          addTodoItem={this.addTodoItem} 
          clearCompleted={this.clearCompleted} 
        />
      </div>
    );
  }
}

export default App;
