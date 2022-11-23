import useFetch from "../customHooks/useFetch";

const Quiz = ({title, categoryPath, modePath}) => {
  const {data, isPending, error} = useFetch(`https://the-trivia-api.com/api/questions?categories=${categoryPath}&limit=20&difficulty=${modePath}`)

  return (
    <div className="container">
      <h1>{title}</h1>
      {data && <ul>
        {data.map(question =>
          <li key={question.id}>{question.question}</li>
        )}
      </ul>}
    </div>
  );
}
 
export default Quiz;