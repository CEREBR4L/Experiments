import React, { Component } from 'react';
import QuizOptions from './QuizOptions';
import classNames from 'classnames';

class Quiz extends Component{

    constructor(){
        super()

        let riddle = this.playGame()
        let correct = false
        let gameOver = false

        this.state = { riddle, correct, gameOver }

        this.renderOptions = this.renderOptions.bind(this)
        this.checkResults = this.checkResults.bind(this)
        this.restart = this.restart.bind(this)
    }

    checkResults(option){
        if(this.state.riddle.answer === option){
            this.setState({correct: true, gameOver: true})
        }
        else{
            this.setState({correct: false, gameOver: true})
        }
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

        if(this.state && this.state.gameOver){
            this.setState({riddle: riddle})
        }

        return riddle
    }

    renderOptions(){
        return(
            <div className="options">
                {this.state.riddle.resultsArray.map(
                    (option, i) => <QuizOptions option={option} key={i} checkResult={this.checkResults}/>
                )}
            </div>
        )
    }

    renderMessage(){
        if(this.state.correct){
            return <h3>Correct: pess the button below to reply.</h3>
        }
        
        return <h3>Incorrect: pess the button below to reply.</h3>
    }

    restart(){
        this.setState({correct: false, gameOver: false})
        this.playGame()
    }

    render(){
        return(
            <div className="quiz">
                <div className="quiz-content">
                    <p className="question">What is the sum of <span className="text-info">{this.state.riddle.field1}</span> and <span className="text-info">{this.state.riddle.field2}</span>?</p>
                    {this.renderOptions()}
                </div>
                <div className={classNames("after", {"hide": !this.state.gameOver}, {"wrong animated zoomInDown": !this.state.correct}, {"correct animated zoomInDown": this.state.correct})}>
                    {this.renderMessage()}
                </div>
                <div className="play-again">
                    <a href="" className="button" onClick={this.restart}>Play Again?</a>
                </div>
            </div>
        )
    }
}

export default Quiz;
