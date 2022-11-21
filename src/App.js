import { useState } from 'react';
import './App.css';
import Mode from './components/Mode';
import Quiz from './components/Quiz';
import Score from './components/Score';
import Select from './components/Select';

function App() {
  const [tab, setTab] = useState('select')
  let categoryPath = ''
  let modePath = ''

  const changeTab = (tabName) => {
    setTab(tabName)
  }

  const setCategory = (category) => {
    categoryPath += category
    console.log(categoryPath)
  }

  const setMode = (mode) => {
    modePath += mode
    console.log(modePath)
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
      /> : null}
      {tab === 'score' ?
        <Score title="Your Score"
        changeTab={changeTab}
      /> : null}
    </div>
  );
}

export default App;
