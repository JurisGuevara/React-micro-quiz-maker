const Mode = ({title, setMode, changeTab}) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>Select Mode</h2>
      <ul className="mode">
        <li onClick={() => {setMode('easy'); changeTab('quiz')}}>Easy</li>
        <li onClick={() => {setMode('medium'); changeTab('quiz')}}>Medium</li>
        <li onClick={() => {setMode('hard'); changeTab('quiz')}}>Hard</li>
      </ul>
    </div>
  );
}
 
export default Mode;