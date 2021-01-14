
import React, { Component } from 'react';
import './Snowman.css';
import { randomWord } from "../components/randomWords.js";

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
            incorrectGuess: 0, //wrong guess starts frm 0
            answerArray: ([]),  //the correct letters
            theAnswer: randomWord()
        }
    }
    render() {
        return (
            <div>
                <h1>Guess who's back? Snowman!</h1>
                <p>this.state.theAnswer</p>
            </div>
        )
    }
}
export default Snowman;
