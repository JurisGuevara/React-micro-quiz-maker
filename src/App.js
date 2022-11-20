import { useState } from 'react';
import './App.css';
import Mode from './components/Mode';
import Quiz from './components/Quiz';
import Score from './components/Score';
import Select from './components/Select';

function App() {
  const [tab, setTab] = useState('select')

  return (
    <div className="App">
      {tab === 'select' ? <Select title="Select Quiz" /> : null}
      {tab === 'mode' ? <Mode title="Select Difficulty" /> : null}
      {tab === 'quiz' ? <Quiz title="New Quiz Title" /> : null}
      {tab === 'score' ? <Score title="Your Score" /> : null}
    </div>
  );
}

export default App;
