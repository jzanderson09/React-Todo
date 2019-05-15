import React from 'react';
// import ReactDOM from 'react-dom';

import Todo from './components/TodoComponents/Todo';
// import TodoForm from './components/TodoComponents/TodoForm';
// import TodoList from './components/TodoComponents/TodoList';

const testData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

// function App() {
//   return (
//     <div className="app-container">
//       <Todo />
//       {/* <TodoForm />
//       <TodoList /> */}
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: testData,
      task: '',
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
        {this.state.todoList.map(taskItem => {
          <Todo task={taskItem} />
        })}
      </div>
    );
  }
}

export default App;
