import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
    render(){
        return(
            <div className="item">
                    <span className="project-title"><a href={this.props.item.url} target="_blank">{this.props.item.name}</a></span> - 
                    <span className="project-tagline">{this.props.item.detail}</span>
                </div>
        )
    }
}

export default Projects
