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
        <div classNameName="row">
            <div classNameName="col-xs-12">
                <h1>Add Recipe</h1> 
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Recipe Name" />
                    </div>
                    <div className="form-group">
                        <label for="desc">Description</label>
                        <textarea className="form-control" id="desc" placeholder="Enter description" />
                    </div>
                    <div className="form-group col-xs-5">
                        <label for="qty">Quantity</label>
                        <input type="text" className="form-control" id="qty" placeholder="Enter description" />
                    </div>
                    <div className="form-group col-xs-5">
                        <label for="item">Ingredient</label>
                        <input type="text" className="form-control" id="item" placeholder="Enter description" />
                    </div>
                    <div className="col-xs-2">
                        <label for="item">Add</label>
                        <button type="submit" className="btn btn-info form-control">Add</button>
                    </div>
                    <div className="col-xs-12">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default Add;
