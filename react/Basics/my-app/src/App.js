import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerText: "Welcome to React",
      contentText: "Lmao"
    };
  }
  render() {
    return (
      <div className="App">
        {/*<h1>{this.state.headerText}</h1>*/}
        <Header header={this.state.headerText} />
        <Content content={this.state.contentText}/>
        {/*<p>{this.props.header}</p>
        <p>{this.props.content}</p>*/}
        <ShowTime />
      </div>
    );
  }
}

App.defaultProps = {
  header: "Default props for the header...",
  content: "Content props for the header..."
};

class Header extends Component{
  render(){
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello</h2>
        <p>{this.props.header}</p>
      </div>
    );
  }
}

class Content extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: [],
      count: 0
    };

    this.updateState = this.updateState.bind(this)
  }

  updateState(){
    var count = this.state.count;
    count++;
    var item = " Click - " + count;
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data: myArray, count: count})
  }

  render(){
    return (
      <div>
        <div className="App-intro">
          <h1>My page starts here...</h1>
          <p>{this.props.content}</p>
          <button onClick={this.updateState}>Click Me</button>
          <h4>State Data: {this.state.data}</h4>  
          {/*<table>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </thead>
            <tbody>
              {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
            </tbody>
          </table>*/}
        </div>
        <div>
          <h4>Array: {this.props.propArray}</h4>
          <h4>Bool: {this.props.propBool ? "True" : "False"}</h4>
          <h4>Function: {this.props.propFunc(5)}</h4>
          <h4>Number: {this.props.propNum}</h4>
          <h4>String: {this.props.propString}</h4>
          <h4>Object: {this.props.propObject.name + ', ' + this.props.propObject.age}</h4>
        </div>
      </div>
    );
  }
}

Content.protoTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunc: React.PropTypes.func,
  propNum: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
};

Content.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(e){return e},
  propNum: 2,
  propString: "String here",
  propObject: {
    name: "Jeff",
    age: 34
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

class ShowTime extends Component{
  
  constructor(props){
    super(props)

    this.state = {date: new Date()}
  }

  componentDidMount(){
    this.timeID = setInterval(
      () => {this.tick()}
      , 1000)
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  componentWillUnMount(){
    clearInterval(this.timeID)
  }

  render(){
    return(
      <div>
        <h2>The current time is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default App;
