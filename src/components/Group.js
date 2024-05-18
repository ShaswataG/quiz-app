export default function Group(props) {

    const choices = props.group.options.map(option => {
        return (
            <button className={(props.check && option === props.group.correct_answer && "correct") || (option === props.group.selected && "selected")} onClick={props.handleSelect} name={props.group.id} value={option}>{option}</button>
        )
    })

    return (
        <div key={props.key} className="group">
            <h3>{props.group.question}</h3>
            <section className="options">
                {choices}
            </section>
        </div>
    )
}