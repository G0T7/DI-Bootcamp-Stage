// src/Components/Car.js
import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carinfo }) {
  const [color, setColor] = useState('red'); // Initial color set to 'red'

  return (
    <div>
      <h1>This car is a {color} {carinfo.model}</h1>
      <Garage size="small" />
    </div>
  );
}

export default Car;
