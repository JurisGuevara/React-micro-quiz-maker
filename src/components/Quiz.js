import { Fragment, useState } from "react";
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
  const [quizEnd, setQuizEnd] = useState(false)
  const [displayScore, setDisplayScore] = useState(0)
  let correctAnswers = []
  let shuffledKeys = []
  let score = 0

  const setAnswer = (e) => {
    e.target.firstElementChild.checked = true
  }

  const shuffleAnswers = (correct, aIncorrect, id) => {
    let answers = [{'correct': correct}]
    correctAnswers.push(correct)
    aIncorrect.map(inc => answers.push({'inc': inc}))

    let shuffled = answers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value)

    let shuffledValues = []

    shuffled.forEach(function(obj){
    for (var key in obj){
        shuffledValues.push(obj[key])
        shuffledKeys.push(key)
      }
    });

    shuffledKeys.push('inc')

    return <Fragment>
      {shuffledValues.map(sItem =>
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
    let renderedAnswers = document.querySelectorAll('.answer')
    let selectedAnswers = []

    renderedAnswers.forEach((element, i) => {
      element.parentNode.classList.add('disable-radio')

      if(element.checked) {
        selectedAnswers.push(element)
      }

      if(shuffledKeys[i] === 'correct') {
        element.parentNode.classList.add('correct')
      }
    });



    selectedAnswers.forEach((element, i) => {
      if(element.value === correctAnswers[i]) {
        element.parentNode.classList.add('yes-point')
        score += 1
      } else {
        element.parentNode.classList.add('no-point')
      }
    })

    setDisplayScore(score)

    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    setTimeout(() => {
      setQuizEnd(true)  
    }, 100);
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      {quizEnd && <h2>Score: {displayScore}/{setMode()}</h2>}
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
        {!quizEnd && <div className="submit">
          <h2>Submit Quiz?</h2>
          <button onClick={submitQuiz}>Yes</button>
        </div>}
      </>}
    </div>
  );
}
 
export default Quiz;