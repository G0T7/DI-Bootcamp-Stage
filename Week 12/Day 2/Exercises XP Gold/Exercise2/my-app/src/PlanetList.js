import React from 'react';

const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

const PlanetList = () => {
  return (
    <ul className="list-group m-5">
      {planets.map((planet, index) => (
        <li key={index} className="list-group-item">
          {planet}
        </li>
      ))}
    </ul>
  );
};

export default PlanetList;
