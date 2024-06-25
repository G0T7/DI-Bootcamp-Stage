// src/App.js
import React from 'react';
import Car from './Components/Car';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <Car carinfo={carinfo} />
    </div>
  );
}

export default App;
