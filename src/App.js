import React, { Component } from 'react';
import dummyData from './dummyData';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

// Adding comments so I can push to the branch!

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: dummyData,
      allSelected: false,
      search: ''
    }
  }

  // Adds new task to todoList:
  addTodoItem = newTodoItem => {
    const newTodo = {
      id: Date.now()*367,
      task: newTodoItem,
      completed: false
    };
    const newState = {
      ...this.state,
      todoList: [...this.state.todoList, newTodo]
    };
    const selectionCheck =  newState.todoList.every(task => task.completed === true);
    newState.allSelected = selectionCheck;
    this.setState(newState);
  };

  // Allows tasks to be clicked and marked as completed:
  toggleCompleted = todoId => {
    // maps through todolist to select/deselect corresponding task:
    const updatedList = this.state.todoList.map(todoItem => {
      if (todoItem.id === todoId) {
        return {
          ...todoItem,
          completed: !todoItem.completed
        };
      }
      return todoItem;
    });
    const newState = {
      ...this.state,
      todoList: updatedList
    };
    const selectionCheck = newState.todoList.every(task => task.completed === true);
    newState.allSelected = selectionCheck;
    this.setState(newState);
  };

  // Clears all completed tasks and removes from the todoList:
  clearCompleted = () => {
    const updatedTodoList = this.state.todoList.filter(taskObj => taskObj.completed === false);
    if (!(this.state.todoList.length === updatedTodoList.length)) {
      if (window.confirm('Are you sure you want to clear your completed item(s)?')) {
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
        <h2 className='header-text'>Your Todo List</h2>
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
