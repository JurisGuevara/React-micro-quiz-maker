import { Fragment } from "react";
import useFetch from "../customHooks/useFetch";

const Quiz = ({title, categoryPath, modePath}) => {
  const setMode = () => {
    switch (modePath) {
      case 'easy':
        return 10
      case 'medium':
        return 15
      case 'hard':
        return 20
      default:
        break;
    }
  }

  const {data, isPending, error} = useFetch(`https://the-trivia-api.com/api/questions?categories=${categoryPath}&limit=${setMode()}&difficulty=${modePath}`)
  let correctAnswers = []

  const setAnswer = (e) => {
    e.target.firstElementChild.checked = true
    console.log(e.target.firstElementChild.value)
  }

  const shuffleAnswers = (correct, aIncorrect, id) => {
    let answers = [correct]
    correctAnswers.push(correct)
    aIncorrect.map(inc => answers.push(inc))

    let shuffled = answers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value)

    return <Fragment>
      {shuffled.map(sItem =>
        <li onClick={(e) => setAnswer(e)} key={sItem}>
          <input className="answer" onClick={(e) => e.stopPropagation} type="radio" name={id} value={sItem} />
          {sItem}
        </li>)}
        <li onClick={(e) => setAnswer(e)}>
        <input className="answer" onClick={(e) => e.stopPropagation} type="radio" name={id} value="none" defaultChecked />
          I don't know
        </li>
    </Fragment>
  }

  const submitQuiz = () => {
    let x = document.querySelectorAll('.answer')
    let y = []

    x.forEach(element => {
      if(element.checked) {
        y.push(element)
      }
    });

    y.forEach((element, i) => {
      if(element.value === correctAnswers[i]) {
        element.parentNode.classList.add('yes-point')
        console.log(element, "tama")
      } else {
        element.parentNode.classList.add('no-point')
        console.log(element, "mali")
      }
    })
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      {isPending && <div>Loading . . .</div>}
      {error && <div>{error}</div>}
      {data &&
      <>
        <ol className="quiz">
          {data.map(question =>
            <li className="item" key={question.id}>
              <p className="question">{question.question}</p>
              <ol className="answers">
                {shuffleAnswers(question.correctAnswer, question.incorrectAnswers, question.id)}
              </ol>
            </li>
          )}
        </ol>
        <div className="submit">
          <h2>Submit Quiz?</h2>
          <button onClick={submitQuiz}>Yes</button>
        </div>
      </>}
    </div>
  );
}
 
export default Quiz;