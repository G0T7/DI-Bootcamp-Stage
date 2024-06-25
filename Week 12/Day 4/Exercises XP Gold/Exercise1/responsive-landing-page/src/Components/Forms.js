// src/Components/Forms.js
import React, { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({ username: '', age: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [textareaContent, setTextareaContent] = useState('The content of a textarea goes in the value attribute');
  const [selectedCar, setSelectedCar] = useState('Volvo');
  const { username, age } = formData;
  let header = null;

  if (username && age) {
    header = <h1>Hello {username} {age}</h1>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'age') {
      if (!/^\d*$/.test(value)) {
        setErrorMessage('Your age must be a number');
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleTextareaChange = (e) => {
    setTextareaContent(e.target.value);
  };

  const handleCarChange = (e) => {
    setSelectedCar(e.target.value);
  };

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (!/^\d+$/.test(age)) {
      alert('Your age must be a number');
      return;
    }
    alert(`You are submitting ${username}`);
  };

  return (
    <div>
      {header}
      <form onSubmit={mySubmitHandler}>
        <label>
          Enter your name:
          <input type="text" name="username" value={username} onChange={handleInputChange} />
        </label>
        <label>
          Enter your age:
          <input type="text" name="age" value={age} onChange={handleInputChange} />
        </label>
        <label>
          Enter some text:
          <textarea value={textareaContent} onChange={handleTextareaChange} />
        </label>
        <label>
          Select your car:
          <select value={selectedCar} onChange={handleCarChange}>
            <option value="Volvo">Volvo</option>
            <option value="Ford">Ford</option>
            <option value="Fiat">Fiat</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Forms;
