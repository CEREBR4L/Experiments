import React, { Component } from 'react';
import './App.css';

class Ingredients extends Component {
    constructor(props){
        super(props)

        this.state = {}

        this.addIngredient = this.addIngredient.bind(this)
    }

    addIngredient(){
        this.props.addIngredients(this.qty.value, this.ingredient.value)
        this.qty.value = ""
        this.ingredient.value = ""
    }

  render() {
    return (
      <div className="container">
        <div className="form-group col-xs-5">
            <label htmlFor="qty">Quantity</label>
            <input 
                type="text" 
                className="form-control" 
                id="qty" 
                placeholder="Enter description" 
                ref={(input) => this.qty = input}
            />
        </div>
        <div className="form-group col-xs-5">
            <label htmlFor="item">Ingredient</label>
            <input 
                type="text" 
                className="form-control" 
                id="item" 
                placeholder="Enter description"
                ref={(input) => this.ingredient = input}
            />
        </div>
        <div className="col-xs-2">
            <label htmlFor="item">Add</label>
            <button type="button" className="btn btn-info form-control" onClick={this.addIngredient}>Add</button>
        </div>
      </div>
    );
  }
}

export default Ingredients;
