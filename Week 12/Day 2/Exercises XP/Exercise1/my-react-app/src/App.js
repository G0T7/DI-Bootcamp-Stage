// Import necessary modules from React
import React from 'react';

// Create a constant variable with JSX to display a "Hello World!" message
const helloWorldMsg = <p>Hello World!</p>;

// Create a constant variable with JSX to display "I Love JSX!"
const myElement = <h1>I Love JSX!</h1>;

// Create a constant variable for sum
const sum = 5 + 5;

function App() {
  return (
    <div className="App">
      {helloWorldMsg}
      {myElement}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;
