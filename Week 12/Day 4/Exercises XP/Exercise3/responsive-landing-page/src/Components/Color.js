// src/Components/Color.js
import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  const changeColorToBlue = () => {
    setFavoriteColor("blue");
  };

  const changeColorToYellow = () => {
    setFavoriteColor("yellow");
  };

  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <button onClick={changeColorToBlue}>Change color to blue</button>
      <button onClick={changeColorToYellow}>Change color to yellow</button>
    </div>
  );
}

export default Color;
