import React from 'react';
import './Exercise.css'; // Import the CSS file for styling

const style_header = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial'
};

class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Hello from Exercise Component!</h1>
        <p className="para">This is a Paragraph</p>
        <a href="/">This is a Link</a>
        <form>
          <label>
            Enter your name:
            <input type="text" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          <p>Here is an Image:</p>
          <img src="react_logo.png" alt="React Logo" />
        </div>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
