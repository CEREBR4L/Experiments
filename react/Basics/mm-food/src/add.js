import React, { Component } from 'react';
import './App.css';
import Ingredients from './ingredients'

class Add extends Component {
    constructor(props){
        super(props)

        this.state = {}

        this.submitRecipe = this.submitRecipe.bind(this)
    }

    submitRecipe(){
        console.log(this.name.value)
        console.log(this.desc.value)
    }

  render() {
    return (
        <div className="row">
            <div className="col-xs-12">
                <h1>Add Recipe</h1> 
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Recipe Name" 
                            ref={(input) => this.name = input}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <textarea 
                            className="form-control" 
                            id="desc" 
                            placeholder="Enter description" 
                            ref={(input) => this.desc = input}
                        />
                    </div>
                    <Ingredients />
                    <div className="col-xs-12">
                        <button type="button" className="btn btn-default" onClick={this.submitRecipe}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default Add;
