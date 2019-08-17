import React from 'react';
// import ReactDOM from 'react-dom';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
        task: 'Organize Garage',
        id: '1528817077286',
        completed: false
        },
        {
          task: 'Bake Cookies',
          id: '1528817084358',
          completed: false
        },
      ],
      task: ''
    };
  }

  //Event Handlers:
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask],
      task: ''
      });
  };

  //For strikethrough styling:
  handleClickCompleted = event => {
    if (event.target.className !== 'completed') {
      event.target.className = 'completed';
    }
    else {
      event.target.className = 'newTask';
    }
  };

  clearCompleted = event => {
    event.preventDefault();
    const completedTasks = document.querySelectorAll('.completed');
    const taskList = document.querySelector('.todoList');
    completedTasks.forEach(task => taskList.removeChild(task));
  }

  render() {
    return(
      <div className="app-container">
        <h1>Todo List: MVP</h1>
        <div className="todoList-container">
          <TodoList 
            list={this.state.todoList} 
            clickCompleted={this.handleClickCompleted}
          />
        </div>
        <div className="todoForm-container">
          <TodoForm 
            addTodo={this.addTodo}
            changeHandler={this.changeHandler}
            task={this.state.task}
            complete={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
