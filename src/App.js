import React from 'react';
// import ReactDOM from 'react-dom';

// import Todo from './components/TodoComponents/Todo';
// import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: ['get groceries', 'take dog to the vet', 'mow the lawn', 'test task item'],
      tasks: '',
      id: '',
      completed: ''
    };
  }

  // //event Handlers:
  // changeHandler = event => {
  //   console.log(event.target.value);
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    return(
      <div className="app-container">
        <h1>Test from app-container!</h1>
        {/* <Todo task={this.state.todoList} /> */}
        {/* <ul className="todo-container">
          {this.state.todoList.map(taskItem => (
            <Todo task={taskItem} />
          ))}
        </ul> */}
        <TodoList list={this.state.todoList} />
      </div>
    );
  }
}

export default App;
