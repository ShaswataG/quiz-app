import Group from "./Group"
import Footer from "./Footer"

export default function Main(props) {
    const groups = props.questions.map(question => {
        return (
            <Group check={props.check} handleSelect={props.handleSelect} key={question.id} group={question} />
        )
    })  

    return (
        <>
            <section className="groups-container">
                {groups}
            </section>
            <Footer score={props.score} total={props.questions.length} reset={props.reset} check={props.check} handleCheck={props.handleCheck} />
        </>
    )
}