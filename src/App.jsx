import './App.css'
import { useState } from 'react';
import Board from './components/Board'
import OptionsBar from './components/OptionsBar'

function App() {
  const [language, setLanguage] = useState('');
  const [topic, setTopic] = useState('all');
  return (
    <div>
      <OptionsBar setLanguage={setLanguage} setTopic={setTopic}/> 
      {/*<Board language={language} topic={topic}/>*/}
    </div>
    
  )
}

export default App;
