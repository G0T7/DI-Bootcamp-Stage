import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

function Card({ icon, title, description }) {
  return (
    <div className="card text-center p-4">
      <div className="card-icon mb-3">
        <i className={`fa ${icon} fa-3x`}></i>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
