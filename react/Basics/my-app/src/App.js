import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerText: "Welcome to React"
    };
  }
  render() {
    return (
      <div className="App">
        {/*<h1>{this.state.headerText}</h1>*/}
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component{
  render(){
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2></h2>
      </div>
    );
  }
}

class Content extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          "age": "25"
        },
        {
          "id": 2,
          "name": "Bar",
          "age": "19"
        },
        {
          "id": 3,
          "name": "Jeff",
          "age": "45"
        }
      ]
    };
  }
  render(){
    return (
      <p className="App-intro">
        <h1>My page starts here...</h1>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
          </tbody>
        </table>
      </p>
    );
  }
}

class TableRow extends Component{
  render(){
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
