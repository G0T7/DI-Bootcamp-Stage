import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Card
              icon="fa-building"
              title="About the Company"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="col-md-4">
            <Card
              icon="fa-globe"
              title="Our Values"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="col-md-4">
            <Card
              icon="fa-university"
              title="Our Mission"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
