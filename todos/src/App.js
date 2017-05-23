import React, { Component } from 'react';
import Todolist from './Todolist';
import Createlist from './createlist';
import './App.css';
import _ from 'lodash';
import Todostore from "./store/todostore";
import * as actions from "./actions"
import dispatcher from "./dispatcher";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: Todostore.getall() }
  }
  componentWillMount() {

    Todostore.on('change', () => (this.setState({ todos: Todostore.getall() })));
  }
  handleitem(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    })
    this.setState({ todos: this.state.todos })
  }
  toggletasks(task) {

    const foundtodo = this.state.todos.find((todo) => todo.task === task);
    foundtodo.isCompleted = !foundtodo.isCompleted;
    this.setState({ todos: this.state.todos })

  }
  deletethisItem(event) {
    console.log(event.target.name);
    console.log("hgkhjjl")
    const list = this.state.todos;
    list.slice();
    var index = list.indexOf(event.target.name);

    list.splice(index, 1);
    console.log(list);
    this.setState(({ todos: list }));
  }
  savethis(oldtask, newtask) {
    console.log(oldtask);
    console.log(newtask);
    const newval = Object.keys(this.state.todos).filter((key) => { this.state.todos.task === oldtask });
    // console.log(newval);
    // const newv=newval[0];
    // console.log(newv);
    //const newval=_.find(this.state.todos, (val) =>val.task  === oldtask);
    newval.task = newtask;
    console.log(newval.task);
    this.setState({ todos: this.state.todos })
    //this.setState({todos:newval});

  }
  deletethisItem(removeitem) {
    console.log(removeitem);
    console.log("hgkhjjl")
    const list = this.state.todos;
    var index = list.indexOf(removeitem);
    console.log(index);
    list.splice(index, 1);
    console.log(list);
    this.setState(({ data: list }));
  }
  createtodo() {
    actions.createtodos(Date.now());
  }
  render() {
    return (
      <div >
        <h1>react app</h1>
        <button onClick={this.createtodo.bind(this)}>click</button>
        <Createlist createitem={this.handleitem.bind(this)} />
        <Todolist toggletask={this.toggletasks.bind(this)}
          savetask={this.savethis.bind(this)} delete={this.deletethisItem.bind(this)} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
