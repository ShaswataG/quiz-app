import React from "react";
import Intro from './components/Intro'
import Main from './components/Main'
import Confetti from 'react-confetti'
import uniqid from 'uniqid'
import axios from 'axios'

const baseURL = "https://opentdb.com/api.php?amount=6&category=31&difficulty=medium&type=multiple"
// const baseURL = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"


export default function App() {

	const [running, setRunning] = React.useState(false)
	const [check, setCheck] = React.useState(false)
	const [questions, setQuestions] = React.useState([])
	const [score, setScore] = React.useState(0)

	// console.log("Finally", questions)

	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) { 
	   
			// Generate random number 
			var j = Math.floor(Math.random() * (i + 1));
					   
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		   
		return array;
	}

	const handleStart = () => {
		console.log("Start")
		setRunning(true)
		let count = -1

		fetch(baseURL)
			.then(res => res.json())
			.then(data => {
				let arr = data.results
				let obj
				setQuestions((questions) => {
					
					// console.log(arr)

					arr = arr.map((question) => {
						count++
						obj = {
							// id: uniqid(),
							id: count,
							selected: "",
							...question,
							options: [
							...question.incorrect_answers,
							question.correct_answer,
							],
						}
						obj.options = shuffleArray(obj.options)
						return obj
					})
					return arr
				})
				// console.log("test")
			})
			.catch(error => {
				setRunning(false)
			})
	}

	const handleSelect = (event) => {
		const { name, value } = event.target
		console.log(name, value)

		if (!check) {
			setQuestions(prevQuestions => {
				let arr = questions
				arr = arr.map((question) => {
					let obj
					if (question.id == name) {
						console.log("Test")
						obj = {
							...question,
							selected: value
						}
					} else {
						obj = question
					}
					return obj
				})
				console.log(arr)
				return arr
			})
			console.log(questions)
		}
	}

	const handleCheck = () => {
		let score = 0
		setScore(0)

		questions.forEach((question) => {

			setScore(prevScore => {
				return question.selected === question.correct_answer ? prevScore+1 : prevScore
			})
		})

		setCheck(check => !check)
	}

	const resetGame = () => {
		console.log(check)
		handleStart()
		setCheck(false)
		setScore(0)

		console.log(questions)
		console.log(check)
		console.log(score)
	}

	React.useEffect(() => {
		if (check) {
			console.log("Checking")
		}
	}, [check])

	return (
		<div>
			{!score === questions.length && <Confetti height="100vh" width="100vw"/>}
			{!running && <Intro running={running} handleStart={handleStart} />}
			{running && <Main score={score} questions={questions} check={check} reset={resetGame} handleSelect={handleSelect} handleCheck={handleCheck} />}
		</div>
	)
}