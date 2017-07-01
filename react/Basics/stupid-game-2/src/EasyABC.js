import React, {Component} from 'react';
import alphabets from './alphabets.json';
import classNames from 'classnames';

class EasyABC extends Component{
    constructor(props){
        super(props)

        this.state = {
            alphabets: alphabets,
            currentPosition: 0,
            currentTick: 0,
            random: false,
            sound: true
        }

        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.playSound = this.playSound.bind(this)
        this.switchRandom = this.switchRandom.bind(this)
        this.switchSound = this.switchSound.bind(this)
        this.btnPlaySound = this.btnPlaySound.bind(this)
    }

    previous(){
        if(this.state.currentPosition === 0){
            this.setState({currentPosition: 25, currentTick: 0})
        }
        else{
            this.setState({currentPosition: this.state.currentPosition - 1, currentTick: 0})
        }
    }

    randNo(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    next(){
        if(this.state.random){
            if(this.state.currentTick < 2){
                this.setState({ currentTick: this.state.currentTick + 1})
            }
            else{
                this.setState({ currentPosition: this.randNo(0, 25), currentTick: 0})
            }
        }
        else{
            if(this.state.currentTick < 2){
                this.setState({currentTick: this.state.currentTick+1})
            }
            else{
                if(this.state.currentPosition === 25){
                    this.setState({currentPosition: 0, currentTick: 0})
                }
                else{
                    this.setState({currentPosition: this.state.currentPosition + 1, currentTick: 0})
                }
            }
        }   
    }

    btnPlaySound(){
        let letterSound = document.querySelector(`audio[data-key="letter"]`)
        let wordSound = document.querySelector(`audio[data-key="word"]`)

        if(this.state.currentTick === 0){
            letterSound.currentTime = 0;
            letterSound.play()
        }
        else{
            wordSound.currentTime = 0;
            wordSound.play()
        }
    }

    playSound(){
        if(!this.state.sound) return

        let letterSound = document.querySelector(`audio[data-key="letter"]`)
        let wordSound = document.querySelector(`audio[data-key="word"]`)

        if(this.state.currentTick === 0){
            letterSound.currentTime = 0;
            letterSound.play()
        }
        else{
            wordSound.currentTime = 0;
            wordSound.play()
        }
    }

    componentDidUpdate(){
        this.playSound()
    }

    componentDidMount(){
        let letterSound = document.querySelector(`audio[data-key="letter"]`)
        if(this.state.currentTick === 0){
            letterSound.currentTime = 0;
            letterSound.play()
        }
    }

    switchRandom(){
        this.setState({ random: !this.state.random })
    }

    switchSound(){
        this.setState({ sound: !this.state.sound })
    }

    render(){
        let showImg = this.state.currentTick !== 0 ? true : false;
        let showWord = this.state.currentTick === 2 ? true : false;
        return(
            <div className="game">

                <span className="random-label">Random Letters: </span>
                <label className="switch">
                    <input 
                        type="checkbox" 
                        defaultValue="false" 
                        checked={this.state.random}
                        onClick={this.switchRandom}
                    />
                    <div className="slider round"></div>
                </label>

                <span className="random-label">Sound: </span>
                <label className="switch">
                    <input 
                        type="checkbox" 
                        defaultValue="false" 
                        checked={this.state.sound}
                        onClick={this.switchSound}
                    />
                    <div className="slider round"></div>
                </label>

                <div className="option">
                    <div className="fields">
                        <div className="field-block">
                            {this.state.alphabets[this.state.currentPosition].letter}
                            <audio src={this.state.alphabets[this.state.currentPosition].letterSound} data-key="letter"></audio>
                        </div>
                    </div>
                    <div className="buttons">
                        <a className="button prev" onClick={this.previous}>Previous</a>
                        <a className="button sound" onClick={this.btnPlaySound}>Play Sound Again</a>
                        <a className="button next" onClick={this.next}>Next</a>
                    </div>
                    <div className="fields">
                        <div className="field-block">
                            <div className="left-field">
                                <div className={classNames('placeholder-span', {hide: showImg})} >Click Next To View Img</div>
                                <img className={classNames('letter-image', {hide: !showImg})} 
                                     alt={this.state.alphabets[this.state.currentPosition].word}
                                     src={this.state.alphabets[this.state.currentPosition].image} 
                                />
                                <audio src={this.state.alphabets[this.state.currentPosition].wordSound} data-key="word"></audio>
                            </div>
                            <div className="right-field">
                                <div className={classNames('placeholder-span', {hide: showWord})}>Click Next To View Spelling</div>
                                <div className={classNames('word', {hide: !showWord})} >{this.state.alphabets[this.state.currentPosition].word.toUpperCase()}</div>
                                <audio src={this.state.alphabets[this.state.currentPosition].letterSound} data-key="letter"></audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default EasyABC;