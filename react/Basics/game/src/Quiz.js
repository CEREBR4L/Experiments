import React, { Component } from 'react';
import QuizOptions from './QuizOptions';

class Quiz extends Component{

    constructor(){
        super()

        let riddle = this.playGame()

        this.state= { riddle }

        this.renderOptions = this.renderOptions.bind(this)
        this.playGame = this.randNo.bind(this)
    }

    randNo(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    playGame(){
        let field1 = this.randNo(20, 50)
        let field2 = this.randNo(20, 50)
        let answer = field1 + field2
        let riddle = {
            resultsArray: [8, 9, 10, 11],
            field1: field1,
            field2: field2,
            answer: answer
        }

        return riddle
    }

    renderOptions(){
        return(
            <div className="options">
                {this.state.riddle.resultsArray.map(
                    (option, i) => <QuizOptions option={option} key={i}/>
                )}
            </div>
        )
    }

    render(){
        return(
            <div className="quiz">
                <div className="quiz-content">
                    <p className="question">What is the sum of <span className="text-info">{this.state.riddle.field1}</span> and <span className="text-info">{this.state.riddle.field2}</span>?</p>
                    {this.renderOptions()}
                </div>
                <div className="play-again">
                    <a href="" className="button">Play Again?</a>
                </div>
            </div>
        )
    }
}

export default Quiz;
