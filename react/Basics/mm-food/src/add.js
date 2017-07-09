import React, { Component } from 'react';
import './App.css';
import Ingredients from './ingredients'
import IngredientList from './ingredientList'

class Add extends Component {
    constructor(props){
        super(props)

        this.state = {
            newRecipe: {
                name: "New Recipe",
                desc: "A description here",
                ingredients: []
            }
        }

        this.submitRecipe = this.submitRecipe.bind(this)
    }

    submitRecipe(){
        let newRecipe = this.state.newRecipe
        newRecipe.name = this.name.value
        newRecipe.desc = this.desc.value
        this.setState(newRecipe)
        console.log(this.state.newRecipe)
    }

    addIngredients(qty, ingredient){
        let newRecipe = this.state.newRecipe
        newRecipe.ingredients.push({qty: qty, ingredient: ingredient})
        this.setState({newRecipe: newRecipe})
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
                    <IngredientList recipe={this.state.newRecipe} />
                    <Ingredients addIngredients={(q, i) => this.addIngredients(q, i)} />
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
