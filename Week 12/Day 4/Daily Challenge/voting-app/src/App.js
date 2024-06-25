import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const vote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <h1>Vote for your favorite language</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            {language.name} - {language.votes} votes
            <button onClick={() => vote(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
