import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let i = 1;
    let myStyle = {
      fontSize: 20,
      color: '#440043'
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h1>My page starts here...</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h4 style={myStyle}>Hello world</h4>
        <p>{1+1}</p>
        <p>{i == 1 ? "True" : "False"}</p>
        {
          //End of div
        }
      </div>
    );
  }
}

export default App;
