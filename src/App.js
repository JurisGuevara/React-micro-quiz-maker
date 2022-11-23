import { useState } from 'react';
import './App.css';
import Mode from './components/Mode';
import Quiz from './components/Quiz';
import Score from './components/Score';
import Select from './components/Select';

function App() {
  const [tab, setTab] = useState('select')
  const [categoryPath, setCategoryPath] = useState('')
  const [modePath, setModePath] = useState('')

  const changeTab = (tabName) => {
    setTab(tabName)
  }

  const setCategory = (category) => {
    setCategoryPath(category)
  }

  const setMode = (mode) => {
    setModePath(mode)
  }

  return (
    <div className="App">
      {tab === 'select' ?
        <Select title="Take a Quiz"
        changeTab={changeTab}
        setCategory={setCategory}
      /> : null}
      {tab === 'mode' ?
        <Mode title="Difficulty"
        changeTab={changeTab}
        setMode={setMode}
      /> : null}
      {tab === 'quiz' ?
        <Quiz title="New Quiz Title"
        changeTab={changeTab}
        categoryPath={categoryPath}
        modePath={modePath}
      /> : null}
      {tab === 'score' ?
        <Score title="Your Score"
        changeTab={changeTab}
      /> : null}
    </div>
  );
}

export default App;
