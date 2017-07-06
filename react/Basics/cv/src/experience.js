import React, { Component } from 'react';
import './App.css';

class Experience extends Component {
    render(){
        return(
            <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">{this.props.item.title}</h3>
                            <div className="time">{this.props.item.period}</div>
                        </div>
                        <a className="company" href={this.props.item.companyURL}>{this.props.item.company}</a>
                    </div>
                    <div className="details">
                        {this.props.item.details}
                    </div>
                </div>
        )
    }
}

export default Experience
