import React, { Component } from 'react';
import QuizOptions from './QuizOptions';

class Quiz extends Component{

    constructor(){
        super()

        let riddle = this.playGame()

        this.state= { riddle }

        this.renderOptions = this.renderOptions.bind(this)
        this.playGame = this.randNo.bind(this)
        this.playGame = this.generateRandomAnswers.bind(this)
    }

    randNo(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateRandomAnswers(sum){
        let resultsArray = []
        let randNoArr = []

        while(randNoArr.length <= 3){
            let randNum = this.randNo(1, 19);
            if(randNoArr.indexOf(randNum) > -1){
                continue
            }
            randNoArr.push(randNum)
        }

        for(let i = 0; i < 3; i++){
            let result = sum
            let num = this.randNo(0, 1)
            if(num == 1){
                result += randNoArr[i]
            }
            else{
                result -= randNoArr[i]
            }
            resultsArray.push(result)
        }
        
        resultsArray.push(sum)
        resultsArray.sort((a, b) => 0.67456454 - Math.random())

        return resultsArray
    }

    playGame(){
        let field1 = this.randNo(20, 50)
        let field2 = this.randNo(20, 50)
        let answer = field1 + field2
        let resultsArray = this.generateRandomAnswers(answer)
        let riddle = {
            resultsArray: resultsArray,
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
