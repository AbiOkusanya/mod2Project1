
import React from 'react';

import './Snowman.css';
import { randomWord } from "./randomWords.js";


import snowman0 from "../images/snowman0.JPG"
import snowman1 from "../images/snowman1.jpg"
import snowman2 from "../images/snowman2.jpg"
import snowman3 from "../images/snowman3.jpg"
import snowman4 from "../images/snowman4.jpg"
import snowman5 from "../images/snowman5.jpg"
import snowman6 from "../images/snowman6.jpg"
import snowman7 from "../images/snowman7.jpg"

// class Reward extends React.Component {
//     cons
// }

class Snowman extends React.Component {
    static defaultProps = {
        maxTries: 7,
        images: [snowman0, snowman1, snowman2, snowman3, snowman4, snowman5, snowman6, snowman7]
    }

    constructor(props) {
        super(props);
        this.state = {
            guessed: ([]),
            incorrectGuess: 0,
            theAnswer: randomWord()
        }

    }

    handleGuessed = e => {
        let letter = e.target.value;
        this.setState({
            guessed: [...this.state.guessed, letter],
            incorrectGuess: this.state.incorrectGuess + (this.state.theAnswer.includes(letter) ? 0 : 1)
        })
    }
    guessedWord() {
        return this.state.theAnswer.split("").map(letter => (this.state.guessed.has ? letter : "_"))
    }

    keyboardButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button
                className='btn btn-primary m-2'
                key={letter}
                value={letter}
                onClick={this.handleGuessed}
            >{letter}</button>),
            // disabled = { setState.guessed(letter) 

            // document.getElementById("keyboardButtons").disabled = true



        );
    }
    resetButton = () => {
        this.setState({
            guessed: ([]),
            incorrectGuess: 0,
            theAnswer: randomWord()
        });
    }

    // }


    render() {
        const gameOver = this.state.incorrectGuess >= this.props.maxTries;
        // const Winner = this.guessed().join("")
        let gameKeyboard = this.keyboardButtons();


        // }

        return (
            <div className="Snowman container">
                <h1 className='text shadow'>Guess who's back? Snowman!</h1>

                <div className="Incorrect Guesses"> Incorrect Guesses:{this.state.incorrectGuess} of {this.props.maxTries}</div>
                <div className='text-center'><img src={this.props.images[this.state.incorrectGuess]} alt="" /></div>
                <div className="text-center"><h2>Try and guess the word </h2></div>
                <div className="text-center"><h3>Hint:it will be an ingredient or name of a drink! </h3></div>
                <div className="text-center"><h3>{!gameOver ? this.guessed : this.state.theAnswer}</h3></div>
                <p>{gameKeyboard}</p>
                <button className='btn btn-info' onClick={this.resetButton}>Reset</button>
            </div>

        )
    }
};
export default Snowman;
