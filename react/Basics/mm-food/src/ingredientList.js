import React, { Component } from 'react';
import './App.css';

class IngredientList extends Component {
  display(){
    let results=[]
    this.props.recipe.ingredients.map((item, i) => results.push(<li key={i}>{item.qty} - {item.ingredient}</li>))
    return results
  }
  render() {
    return (
      <div className="container">
        <ul>
          {this.display()}
        </ul>
      </div>
    );
  }
}

export default IngredientList;