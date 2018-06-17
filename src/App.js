import React, { Component } from 'react';
import axios from 'axios';

import Jumbotron_Head from './components/jumbotron';
import Nav_header from './components/nav';
import TodoTable from './components/Boot_table';
import New_todo from './components/New_todo';



const todos = [
  {
    title: 'Train sailing',
    due_date: '20.03.2017',
    priority: 'low'
  },
  {
    title: 'Be a very good man',
    due_date: '10.07.2019',
    priority: 'high'
  },
  {
    title: 'Wash the dishes',
    due_date: '20.03.2022',
    priority: 'low'
  }
];


localStorage.setItem('todos', JSON.stringify(todos));

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.onCreate = this.onCreate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount(){
    this.getTodos();
  }

  getTodos() {
    //const todos = JSON.parse(localStorage.getItem('todos'));

    axios.get('http://localhost:3001/api/v1/todos')
    .then(response => {
        console.log(response)
        this.setState({
            todos: response.data
        })
    })
    .catch(error => console.log(error))

   // this.setState( { todos });
  }

  onDelete(title) {
    console.log(title);
  }

  onCreate(title, due_date, priority ){


    const newTodo = {
      title: title,
      due_date: due_date,
      priority: priority
    };

    console.log(newTodo);



    this.setState({ 
      todos: [...this.state.todos, newTodo] 
    });
  }

  render() {
    return (
      <div>
        <Nav_header/>
        <div className="container">
          <Jumbotron_Head/>
          <New_todo onCreate ={this.onCreate} />
          <TodoTable todosProp = {this.state.todos} onDelete ={this.onDelete} />
        </div>
      </div>
    );
  }
}

export default App;
