import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        <Header />
        {/*<Form />
        <InputTextArea />
        <SelectBoxForm />*/}
        <Reservation />
        {/*<Content content={this.state.contentText}/>
        <p>{this.props.header}</p>
        <p>{this.props.content}</p>
        <ShowTime />*/}
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
        <h2>REACT</h2>
      </div>
    );
  }
}

class Form extends Component{
  constructor(props){
    super(props)

    this.state = {
      myInputVal: "My Input"
    }

    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(e){  
    this.setState({myInputVal: e.target.value})
  }

  render(){
    return (
      <div>
        <InputText inputVal={this.state.myInputVal} inputChange={this.inputChange} />
        <h4>{this.state.myInputVal}</h4>
      </div>
    )}
}

class Reservation extends Component{
  constructor(props){
    super(props);

    this.state = {
      isGoing: true,
      noOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleInputChange(e){
    const target = e.target;
    const val = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: val
    })
  }

  handleSubmit(e){
    alert(this.state.noOfGuests + " " + this.state.isGoing)
    e.preventDefault()
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Are you going?
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
        </label>
        <label>
          Number of guests?
          <input type="number" name="noOfGuests" value={this.state.noOfGuests} onChange={this.handleInputChange}/>
        </label>
        <input type="submit"/>
      </form>
    )}
}


class InputText extends Component{
  render(){
    return (
      <div>
        <input type="text" value={this.props.myInputVal} onChange={this.props.inputChange}/>
      </div>
    )}
}

class InputTextArea extends Component{
  constructor(props){
    super(props)

    this.state = {
      val: "Once upon a time..."
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({val: e.target.value})
  }

  handleSubmit(e){
    alert(this.state.val)
    e.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <textarea type="text" value={this.state.val} onChange={this.handleChange}></textarea>
        <h4>{this.state.val}</h4>
        <input type="submit"/>
      </form>
    )}
}

class SelectBoxForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      value: "grapefrooot"
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }

  handleSubmit(e){
    alert(this.state.value)
    e.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Pick ya flavah
          <select onChange={this.handleChange}>
            <option value="grapefrooot">Grapefrooot</option>
            <option value="orange">Orange</option>
            <option value="apppelleee">Apppelleee</option>
            <option value="cocolatte">Cocolatte</option>
          </select>
        </label>
        <input type="submit"/>
      </form>
    )}
}

class Content extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: [],
      count: 0
    };

    this.updateState = this.updateState.bind(this)
    this.updateNumber = this.updateNumber.bind(this)
    this.findDOMNode = this.findDOMNode.bind(this)
    this.setNewNumber = this.setNewNumber.bind(this)
  }

  setNewNumber(){
    this.setState({count: this.state.count + 1})
  }

  updateState(){
    var count = this.state.count;
    count++;
    var item = " Click - " + count;
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data: myArray, count: count})
  }

  updateNumber(){
    this.forceUpdate();
  }

  findDOMNode(){
    var myDIV = document.getElementById('myDiv')
    ReactDOM.findDOMNode(myDIV).style.color = 'red';
  }

  render(){
    return (
      <div>
        <div className="App-intro">
          <h1>My page starts here...</h1>
          <p>{this.props.content}</p>
          <button onClick={this.updateState}>Click Me</button>
          <h4>State Data: {this.state.data}</h4>  
          <button onClick={this.updateNumber}>Random Num</button>
          <h4>Ran No: {Math.random()}</h4>

          <button onClick={this.findDOMNode}>Find DOM NODE</button>
          <div id="myDiv">this is my div</div>
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
        <div>
          <button onClick={this.setNewNumber}>Update Number</button>
          <NumberComp myNum={this.state.count}/>
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

class NumberComp extends Component{
  componentWillMount(){
    console.log('called the comp will mount');
  }

  componentDidMount(){
    console.log('called the comp did mount');
  }

  componentWillReceiveProps(newProps){
    console.log('called the comp Will Receive Prop');
  }

  shouldComponentUpdate(newProps, nextState){
    console.log('called the should Component Update');
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log('called the comp will update');
  }

  componentDidUpdate(newProps, nextState){
    console.log('called the comp DID update');
  }

  componentWillUnmount(){
    console.log('called the comp will unmount');
  }

  render(){
    return (
      <div>
        <h4>{this.props.myNum}</h4>
      </div>
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
