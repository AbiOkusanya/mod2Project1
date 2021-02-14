
import React, { Component } from 'react';

import './Snowman.css';
import { randomWord } from "./randomWords.js";
// import { Link } from "react-router-dom";


import snowman0 from "../images/snowman0.JPG"
import snowman1 from "../images/snowman1.jpg"
import snowman2 from "../images/snowman2.jpg"
import snowman3 from "../images/snowman3.jpg"
import snowman4 from "../images/snowman4.jpg"
import snowman5 from "../images/snowman5.jpg"
import snowman6 from "../images/snowman6.jpg"
import snowman7 from "../images/snowman7.jpg"

class Snowman extends Component {
    static defaultProps = {
        maxTries: 7,
        images: [snowman0, snowman1, snowman2, snowman3, snowman4, snowman5, snowman6, snowman7]
    }

    constructor(props) {
        super(props);
        this.state = {
            incorrectGuess: 0,
            guessed: new Set([]),
            theAnswer: randomWord()

        }
        this.handleGuessed = this.handleGuessed.bind(this);
    }

    handleGuessed = e => {
        let letter = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(letter),
            incorrectGuess: st.incorrectGuess + (st.theAnswer.includes(letter) ? 0 : 1)
        }))
    }
    guessedWord() {
        return this.state.theAnswer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    keyboardButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button
                class='btn btn-primary m-2'
                key={letter}
                value={letter}
                onClick={this.handleGuessed}>
                {/* disabled={this.state.guessed.has(letter)} */}
                {letter}
            </button>
        ));
    }
    resetButton = () => {
        this.setState({
            incorrectGuess: 0,
            guessed: new Set([]),
            theAnswer: randomWord()
        });
    }


    // }


    render() {
        const gameOver = this.state.incorrectGuess >= this.props.maxTries;
        const winner = this.guessedWord().join("") === this.state.theAnswer;
        let gameRound = this.keyboardButtons();

        if (winner) {
            gameRound = <h3>" Yes! Time for a beer , click here!"
             <a href="/reward">Reward</a></h3>;
        }

        else if (gameOver) {
            gameRound =<h3> "It's okay, hit reset and try again!"</h3>

        }


        // }

        return (
            <div className="Snowman container">
                <h1 className='text shadow'>Guess who's back? Snowman!</h1>

                <div className="Incorrect Guesses"> Incorrect Guesses:{this.state.incorrectGuess} of {this.props.maxTries}</div>
                <div className="text-center"><img src={this.props.images[this.state.incorrectGuess]} alt="" /></div>
                <div className="text-center"><h2>Try and guess the word </h2></div>
                <div className="text-center"><h3>Hint: It will be an ingredient or name of a beer! </h3></div>
                <p>{!gameOver ? this.guessedWord () : this.state.theAnswer}</p>
                <p>{gameRound}</p>
                <button className='btn btn-info' onClick={this.resetButton}>Reset</button>
                
            </div>

        )
    }
};
export default Snowman;
