import React, { Component } from 'react';
import './App.css';

class Add extends Component {
    constructor(props){
        super(props)

        this.state = {}

        this.goHome = this.goHome.bind(this)
    }

    goHome(){
        console.log('btn clikd')
        this.props.history.push('/')
    }
  render() {
    return (
      <div className="container">
        <h1>Add</h1>
        <button onClick={this.goHome}>Submit</button>
      </div>
    );
  }
}

export default Add;
