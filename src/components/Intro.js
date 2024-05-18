import React from "react";

export default function Intro(props) {


    return (
        <div className="intro-container">
            <h1>Quizzical</h1>
            <p>Test your knowledge about Japanese anime and manga</p>
            <button onClick={props.handleStart}>Start quiz</button>
        </div>
    )
}