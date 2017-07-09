import React, { Component } from 'react';
import './App.css';
import IngredientList from './ingredientList'

class Home extends Component {
  constructor(props){
      super(props)

      this.state = {
          recipes: JSON.parse(localStorage.getItem('recipes')) || []
      }

      this.display = this.display.bind(this)
    }

    display(){
      let results=[]
      this.state.recipes.map((item, i) => results.push(
        <div key={i} className="col-xs-6">
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <IngredientList recipe={item} />
        </div>
      ))
      return results
  }

  render() {
    return (
      <div className="row">
        <h1>Home</h1>
        {this.display()}
      </div>
    );
  }
}

export default Home;
