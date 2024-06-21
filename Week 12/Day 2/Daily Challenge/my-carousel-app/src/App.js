import React from 'react';
import CarouselComponent from './CarouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-center my-4">React Carousel</h1>
      <div className="container">
        <CarouselComponent />
      </div>
    </div>
  );
}

export default App;
