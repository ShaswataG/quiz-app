export default function Footer(props) {
    return (
        <footer>
            {
                props.check ? 
                    <div>
                        <h5>You scored {props.score}/{props.total} correct answers </h5>
                        <button onClick={props.reset} className="play-again-button">
                            Play Again
                        </button>
                    </div>
                    :
                    <div>
                        <button onClick={props.handleCheck} className="check-button">Check answers</button>
                    </div>
            }
        </footer>
    )
}