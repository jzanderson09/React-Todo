import React, { Component } from 'react';
import dummyData from './dummyData';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: dummyData,
      allSelected: false
    }
  }

  // Adds new task to todoList:
  addTodoItem = newTodoItem => {
    const newTodo = {
      id: Date.now()*367,
      task: newTodoItem,
      completed: false
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] })
  };

  // Allows tasks to be clicked and marked as completed:
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

  // Clears all completed tasks and removes from the todoList:
  clearCompleted = () => {
    const updatedTodoList = this.state.todoList.filter(taskObj => taskObj.completed === false);
    if (!(this.state.todoList.length === updatedTodoList.length)) {
      if (window.confirm('Are you sure you want to clear your completed items?')) {
        this.setState({ todoList: updatedTodoList, allSelected: false });
      }
    }
  };

  // Marks all tasks as completed and updates todoList:
  selectAll = () => {
    if (this.state.allSelected) {
      const cleared = this.state.todoList.map(taskObj => {
        return {
          ...taskObj,
          completed: false
        }
      });
      this.setState({ todoList: cleared, allSelected: false });
    }
    else {
      const selected = this.state.todoList.map(taskObj => {
        return {
          ...taskObj,
          completed: true
        };
      });
      this.setState({ todoList: selected, allSelected: true });
    }
  }

  // Removes completed tasks and updates todolist:
  clearSelected = () => {
    const clearedTodoList = this.state.todoList.map(taskObj => {
      return {
        ...taskObj,
        completed: false
      };
    });
    this.setState({ todoList: clearedTodoList, allSelected: false });
  };

  render() {
    return (
      <div className='App-container'>
        <h2>Welcome to your Todo App!</h2>
        <h3>Todo List:</h3>
        <TodoList 
          todoList={this.state.todoList} 
          toggleCompleted={this.toggleCompleted}
          selectAll={this.selectAll}
          allSelected={this.state.allSelected}
        />
        <TodoForm
          input={this.state.input}
          addTodoItem={this.addTodoItem} 
          clearCompleted={this.clearCompleted}
          clearSelected={this.clearSelected}
        />
      </div>
    );
  }
}

export default App;
