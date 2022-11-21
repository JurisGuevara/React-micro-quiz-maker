import useFetch from "../customHooks/useFetch";

const Select = ({title, changeTab, setCategory}) => {
  const {data, isPending, error} = useFetch('https://the-trivia-api.com/api/categories')

  const categoryImg = [
    'https://cdn.pixabay.com/photo/2022/08/03/03/53/don-quixote-7361798_960_720.png',
    'https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767982__340.jpg',
    'https://cdn.pixabay.com/photo/2016/08/05/18/30/collage-1572905__340.jpg',
    'https://cdn.pixabay.com/photo/2022/11/05/02/15/lightning-7570980__340.jpg',
    'https://cdn.pixabay.com/photo/2015/01/10/23/04/map-595791__340.png',
    'https://cdn.pixabay.com/photo/2020/02/25/01/10/julius-caesar-4877717__340.png',
    'https://cdn.pixabay.com/photo/2016/04/30/14/58/music-1363069__340.jpg',
    'https://cdn.pixabay.com/photo/2016/07/23/10/51/binary-1536651__340.jpg',
    'https://cdn.pixabay.com/photo/2015/11/04/21/41/painting-1023411__340.jpg',
    'https://cdn.pixabay.com/photo/2016/07/26/12/05/olympia-1542700__340.jpg'
  ]

  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>Select Category</h2>
      {data && 
        <ul className="select">
          {Object.keys(data).map((category, i) => (
            <li onClick={() => {changeTab('mode'); setCategory(Object.values(data)[i][0])}} key={Object.values(data)[i][0]}>
              <p>{category}</p>
              <div className="thumb">
                <img src={categoryImg[i]} alt="category image" />
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
 
export default Select;