import useFetch from "../customHooks/useFetch";

const Quiz = ({title, categoryPath, modePath}) => {
  const {data, isPending, error} = useFetch(`https://the-trivia-api.com/api/questions?categories=${categoryPath}&limit=20&difficulty=${modePath}`)

  return (
    <div className="container">
      <h1>{title}</h1>
      {data &&
      <ol className="quiz">
        {data.map(question =>
          <li className="item" key={question.id}>
            <p className="question">{question.question}</p>
            <ol className="answers">
              
            </ol>
          </li>
        )}
      </ol>}
    </div>
  );
}
 
export default Quiz;