// src/Components/Events.js
import React, { useState } from 'react';

function Events() {
  // Part I: Click Event
  const clickMe = () => {
    alert('I was clicked');
  };

  // Part II: Key Down Event
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  // Part III: Toggle State
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      {/* Part I: Click Event */}
      <button onClick={clickMe}>Click Me</button>

      {/* Part II: Key Down Event */}
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" />

      {/* Part III: Toggle State */}
      <div>
        <h3>Exercise 9:</h3>
        <button onClick={toggle}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
}

export default Events;
