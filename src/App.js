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
        task: 'laundry',
        id: '',
        completed: false
        },
        {
          task: 'homework',
          id: '',
          completed: false
        },
        {
          task: 'walk the dog',
          id: '',
          completed: false
        }
      ],
      task: ''
    };
  }

  //event Handlers:
  changeHandler = event => {
    this.setState({ [event.target.task]: event.target.value});
  };

  addTodo = event => {
    event.preventDefault();
    let newId = Date.now();
    let newTask = {
      task: this.state.task,
      id: newId,
      completed: false
    };
    this.setState({
      task: [...this.state.todoList, newTask]
    });
  };


  render() {
    console.log(this.state.todoList);
    return(
      <div className="app-container">
        <h1>Todo List: MVP</h1>
        <div className="todoList-container">
          <TodoList list={this.state.todoList} />
        </div>
        <div className="todoForm-container">
          <TodoForm 
            task={this.state.todoList}
            addTodo={this.addTodo}
            changeHandler={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
