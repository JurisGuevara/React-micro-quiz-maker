import useFetch from "../customHooks/useFetch";

const Select = ({title}) => {
  const {data, isPending, error} = useFetch('https://the-trivia-api.com/api/categories')

  return (
    <div className="container">
      <h1>{title}</h1>
      {data && 
        <ul>
          {Object.keys(data).map((category, i) => (
            <li key={Object.values(data)[i][0]}>{category}</li>
          ))}
        </ul>
      }
    </div>
  );
}
 
export default Select;